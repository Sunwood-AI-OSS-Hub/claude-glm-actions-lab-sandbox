"""Hello App main module."""

import sys


def main():
    """Print Hello to stdout.

    This function prints a greeting to stdout and returns an exit code.
    It handles potential errors during output gracefully.

    Returns:
        int: Exit code (0 for success, 1 for error).

    Examples:
        >>> main()
        Hello
        0
    """
    try:
        print("Hello")
        return 0
    except (OSError, UnicodeEncodeError) as e:
        print(f"Error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
