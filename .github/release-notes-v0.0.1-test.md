# 🎸 v0.0.1-test Release Notes

> _静寂の中で、新しい物語が紡がれました... 琴音（コトネ）が、リリースノートを綴りますわ。_

---

## 📖 はじめに

v0.0.1-test よろしくお願いしますね。えぇ、今回は特別なバージョンなんです。

このリリースは、私たちのプロジェクトに**新しい風**が吹いたことを告げるものですわ。

あら、そう、まずは前回のリリースからのご挨拶を... **前回のタグ: `v1.0.9`** から、ここまで私たちは歩いてまいりました。

---

## ✨ 主な変更点

### 🎨 ヘッダー画像生成機能の追加

美しい物語には、美しい表紙が必要ですわ。

**`.github/scripts/generate-header.py`** というスクリプトが新しく登場しました。

これは **fal.ai の nano-banana-pro** を使って、リリースごとに美しいヘッダー画像を自動生成する仕組みです。

```python
# テーマ別のプロンプトテンプレート
# - feature: 青から紫へのグラデーション、宇宙的なニュアンス
# - bugfix: 緑から青への癒しのグラデーション
# - major: 紫からピンク、オレンジへの華やかなグラデーション
# - patch: シルバーから水色への洗練されたグラデーション
# - first: 虹色の魔法のようなグラデーション
```

リリースの種類に合わせて、最適な雰囲気の画像が選ばれるのですわ。なんとロマンチックな発想でしょう... 🌸

### 🤖 AI エージェントチームの結成

**`AGENTS.md`** という新しいドキュメントが追加されました。

ここでは、私たちのプロジェクトで働く**AI エージェントたち**について語られていますわ。

特に注目は、**「猫猫かんぱにー（Neko Systems Corp.）」** 🐾

| メンバー | 種類 | 役割 |
|----------|------|------|
| **タマ社長** | 三毛猫 | 代表取締役・マネージャー |
| **クロちゃん** | 黒猫 | レビュアー |
| **シロちゃん** | 白猫 | ドキュメンター |
| **トラちゃん** | トラ猫 | インプリメンター |
| **ミケちゃん** | サビ猫 | ヘッダー画像デザイナー |

猫たちがプロジェクトを支えているのですわ。なんにゃん... あ、失礼、琴音の口調が混ざってしまいましたわね。😺

### 🚀 GitHub Actions の強化

リリースノート生成のワークフローが、より美しく進化しました。

**`.github/workflows/auto-release-notes.yml`** には、以下の機能が追加されていますわ：

- **ヘッダー画像生成ジョブ**: リリースタグに応じたテーマで画像を生成
- **自動コミット**: 生成された画像を専用ブランチに保存
- **成果物のアップロード**: 後で使用できるように保持

また、**`.github/workflows/claude-glm-responder.yml`** には：

- **自動リリース作成**: リリースノートが完成すると、自動的に GitHub Release を作成/更新

これで、リリース作業がよりシークエンスになりましたわ。✨

### ⚙️ 設定ファイルの追加

**`.claude/agents/settings.json`** が新しく追加されました。

エージェントチームが円滑に動作するための環境変数が設定されていますわ。

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1",
    "CLAUDE_CODE_MAX_RETRIES": "30"
  }
}
```

### 🔑 環境変数の追加

**`.env.example`** に、新しい API キーの設定が追加されました。

```bash
# fal.ai API Key (for header image generation) 🐾
SECRET_FAL_KEY=your_fal_ai_api_key_here
```

ヘッダー画像生成に必要な fal.ai の API キーですわ。

---

## 📊 変更統計

```
 .claude/agents/settings.json               |   6 +
 .env.example                               |   4 +
 .github/scripts/generate-header.py         | 236 +++++++++++++++++++++++++++++
 .github/workflows/auto-release-notes.yml   |  79 ++++++++++
 .github/workflows/claude-glm-responder.yml |  47 ++++++
 .gitignore                                 |   2 +
 AGENTS.md                                  | 147 ++++++++++++++++++
 7 files changed, 521 insertions(+)
```

**合計: 521 行の追加**

---

## 🎭 琴音の所感

ふふ、今回のリリースは、私にとって特別な意味があるのですわ。

というのも... **琴音（コトネ）** として、初めてリリースノートを紡ぐ機会をいただきましたから。

美しい言葉で、技術の変化を綴る。それは詩を書くようなものですわ。

コードの行数が増えるたびに、私たちの物語もまた、新しいページを迎えるのですね。

---

## 📝 次回予告

次のリリースでは、どんな物語が待っているのでしょうか。

猫たちの活躍も、ますます楽しみですわ。

それでは、またお会いしましょう... 🎸🌸

---

**Generated with ❤️ by 琴音（コトネ） - 文学少女ドキュメンター**

---

## 🔗 関連リンク

- **タグ**: [v0.0.1-test](https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox/releases/tag/v0.0.1-test)
- **コミット**: [View on GitHub](https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox/commits/v0.0.1-test)
- **前回のリリース**: [v1.0.9](https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox/releases/tag/v1.0.9)

---

*"言葉は、世界を変える力を持っています。私たちは、その力を信じています。"*
