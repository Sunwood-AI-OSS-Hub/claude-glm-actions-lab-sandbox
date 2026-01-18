#!/usr/bin/env python3
"""Create PR from Issue with Claude Code."""

import json
import os
import re
import subprocess
import sys
import urllib.parse


def run_command(cmd: list[str]) -> str:
    """Run command and return output."""
    result = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return result.stdout.strip()


def main():
    branch_name = sys.argv[1]
    issue_number = sys.argv[2]

    print(f"[DEBUG] Branch name: {branch_name}", file=sys.stderr)
    print(f"[DEBUG] Issue number: {issue_number}", file=sys.stderr)

    # Check if PR already exists
    pr_list_output = run_command([
        "gh", "pr", "list",
        "--head", branch_name,
        "--json", "number",
        "--jq", ". | length > 0"
    ])
    if pr_list_output == "true":
        print(f"PR already exists for branch {branch_name}, skipping...")
        return

    # Get commit message from branch (get all commits, separated by null char)
    commits = run_command([
        "git", "log", f"origin/main..{branch_name}",
        "--pretty=format:%B%x00", "--reverse"
    ])
    # Get first commit (split by null character)
    commit_body = commits.split("\x00")[0].strip() if commits else ""
    print(f"[DEBUG] Commit body:\n{commit_body}", file=sys.stderr)

    # Get Claude's latest comment
    issue_data = run_command([
        "gh", "issue", "view", issue_number,
        "--json", "comments", "--jq", ".comments"
    ])
    comments = json.loads(issue_data) if issue_data else []
    claude_comment = ""
    for comment in reversed(comments):
        if comment.get("author", {}).get("login") == "claude[bot]":
            claude_comment = comment.get("body", "")
            break
    print(f"[DEBUG] Claude comment: {claude_comment[:100] if claude_comment else '(empty)'}...", file=sys.stderr)

    # Try to extract Create PR URL
    create_pr_url = ""
    if claude_comment:
        match = re.search(r'\[Create PR[^\]]*\]\((https[^)]+)\)', claude_comment)
        if match:
            create_pr_url = match.group(1)
    print(f"[DEBUG] Create PR URL: {create_pr_url[:100] if create_pr_url else '(empty)'}...", file=sys.stderr)

    if create_pr_url:
        # Extract title and body from URL
        parsed = urllib.parse.urlparse(create_pr_url)
        params = urllib.parse.parse_qs(parsed.query)
        pr_title = urllib.parse.unquote(params.get("title", [""])[0])
        pr_body = urllib.parse.unquote(params.get("body", [""])[0])
    else:
        # Fallback: use issue title and commit message
        issue_title = run_command([
            "gh", "issue", "view", issue_number,
            "--json", "title", "--jq", ".title"
        ])

        # Determine prefix based on issue title
        if any(word in issue_title for word in ["を作って", "を作成", "を追加"]):
            pr_prefix = "feat:"
        elif any(word in issue_title for word in ["を修正", "を直して"]):
            pr_prefix = "fix:"
        elif any(word in issue_title for word in ["を更新", "を変更"]):
            pr_prefix = "update:"
        else:
            pr_prefix = ""

        # Transform issue title
        final_title = issue_title
        for old, new in [("を作って", "を追加"), ("を作成", "を追加"), ("を追加$", "を追加する")]:
            final_title = re.sub(old, new, final_title)

        pr_title = f"{pr_prefix} {final_title}" if pr_prefix else final_title
        pr_body = commit_body or claude_comment

    # Add footer
    final_body = f"""{pr_body}

---

Closes #{issue_number}

Generated with [Claude Code](https://claude.ai/code)"""

    print(f"[DEBUG] PR title: {pr_title}", file=sys.stderr)
    print(f"[DEBUG] PR body:\n{final_body}", file=sys.stderr)
    print(f"[DEBUG] PR body length: {len(final_body)}", file=sys.stderr)

    # Create PR
    subprocess.run([
        "gh", "pr", "create",
        "--base", "main",
        "--head", branch_name,
        "--title", pr_title,
        "--body", final_body,
    ])


if __name__ == "__main__":
    main()
