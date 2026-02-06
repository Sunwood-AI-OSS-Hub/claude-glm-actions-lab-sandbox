# 🎭 Release v1.1.0

![](https://raw.githubusercontent.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox/header-v1.1.0/assets/release-headers/header-v1.1.0.png)

---

## 📖 はじめに

ごきげんよう、GitHubの旅人たち。私、琴音（コトネ）が今回のリリースの物語を紡ぎましょう。

この度、**v1.1.0** をリリースいたします。前回のリリース **v0.0.8-test-svg-final** から、いくつもの物語が綴られ、新たな章が幕を開けました。

---

## 🌟 新機能

### Source Fetcher Action の誕生

新しいアクション `.github/actions/source-fetcher/action.yml` が誕生しました。まるで物語の語り部が遠くの地から言葉を運んでくるかのように、ローカルとリモートの両方からコンテンツを取得できるようになりました。

```yaml
- ローカルファイルとリモートURLの両方に対応
- 柔軟な出力先の指定
- コンテンツの取得結果をoutputsとして提供
```

---

## ✨ 変更点

### ワークフローの調和

三つのワークフローが、新たな調和を奏でるように書き換えられました。

#### 1. auto-release-notes.yml
- ヘッダー生成スクリプトの取得方法が `USE_LOCAL_SCRIPT` から `SOURCE_LOCATION` に統一されました
- 設定変数が整理され、より明確になりました

#### 2. claude-glm-responder.yml
- プルリクエスト作成スクリプトのソース指定が `SOURCE_LOCATION` に統一
- ローカルパスの設定が追加され、柔軟性が向上しました

#### 3. pr-auto-comment.yml
- テンプレートのソース指定が `SOURCE_LOCATION` に統一
- 一貫性のある命名規則が採用されました

---

## 📊 変更統計

```
.github/actions/source-fetcher/action.yml  | 42 ++++++++++++++++++++++
.github/workflows/auto-release-notes.yml   | 12 +++++---
.github/workflows/claude-glm-responder.yml | 15 +++++----
.github/workflows/pr-auto-comment.yml      | 19 +++++-----
4 files changed, 68 insertions(+), 20 deletions(-)
```

---

## 🎨 設計の意図

このリリースでは、**一貫性** というテーマが息づいています。

以前は `USE_LOCAL_SCRIPT`、`SCRIPT_SOURCE`、`TEMPLATE_SOURCE` など、異なる名前で類似の機能が実装されていました。しかし今では、すべて `SOURCE_LOCATION` という統一された名前で、ローカルとリモートの切り替えができるようになりました。

これは、音楽の楽譜が統一された記譜法によって演奏者に明確な指示を与えるように、ワークフローにも明確な一貫性を与える試みなのです。

---

## 📚 使い方のヒント

### 環境変数の設定

リポジトリの設定で、以下の変数を制御できます：

```yaml
SOURCE_LOCATION: 'remote'  # または 'local'
SOURCE_URL: 'https://raw.githubusercontent.com/...'  # リモートの場合
LOCAL_PATH: '.github/scripts/script.py'  # ローカルの場合
```

---

## 🌸 結びに

物語は続いていきます。次の章では、どんな新しい言葉が紡がれるのでしょうか。

私、琴音（コトネ）は、このリリースノートを、あなたの手元に届けることを幸せに思います。

---

**リリース日**: 2026年2月6日

**タグ**: v1.1.0

---

*Generated with [Claude Code](https://claude.ai/code)*
