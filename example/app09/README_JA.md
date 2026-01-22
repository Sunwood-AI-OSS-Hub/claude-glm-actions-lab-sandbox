<p align="center">
    <a href="README.md"><img src="https://img.shields.io/badge/Documentation-English-white.svg" alt="EN doc"/></a>
    <a href="README_JA.md"><img src="https://img.shields.io/badge/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88-%E6%97%A5%E6%9C%AC%E8%AA%9E-white.svg" alt="JA doc"/></a>
</p>

# カラーピッカー 🎨

シンプルで美しいカラーピッカーアプリ。色を選択して、HEX、RGB、HSL形式で確認できます。

## 概要 📖

このアプリケーションは、ネイティブのカラーピッカーまたはプリセットパレットを使用して色を選択できるカラーピッカーツールです。HEX、RGB、HSL形式間の色変換を自動的に行い、リアルタイムでプレビューを提供します。

## 機能 ✨

- **カラーピッカー**: ネイティブのカラーピッカーで色を選択
- **HEX入力**: HEXコードを直接入力（3桁/6桁対応）
- **色変換**: HEX → RGB、HSL 自動変換
- **プレビュー**: 選択した色をリアルタイムでプレビュー
- **パレット**: よく使う色から素早く選択可能

## 使い方 🚀

### インストール

特別なインストールは不要です。以下の手順で使用できます。

```bash
# リポジトリをクローン
git clone https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox.git

# ディレクトリに移動
cd claude-glm-actions-lab-sandbox/example/app09
```

### 実行

1. `index.html` をブラウザで開く
2. カラーピッカー、パレット、またはHEX入力で色を選択
3. RGB、HSLの値が自動的に表示されます

## ファイル構成 📁

```
app09/
├── index.html   # メインのHTMLファイル
├── style.css    # スタイルシート
├── script.js    # カラー変換ロジック
├── README.md    # 英語ドキュメント
└── README_JA.md # 日本語ドキュメント（このファイル）
```

## 技術的なポイント 💻

- HEX、RGB、HSLの相互変換アルゴリズム
- リアルタイムのプレビュー更新
- 入力バリデーションとエラー表示
- CSSグリッドレイアウト

## アクセシビリティ ♿

- キーボード操作対応（パレット選択）
- ARIAラベルによるスクリーンリーダー対応
- フォーカス表示の視覚的フィードバック

## ブラウザ対応 🌐

- Chrome / Edge（推奨）
- Firefox
- Safari
- モバイルブラウザ

## 技術スタック 💻

- HTML5
- CSS3
- Vanilla JavaScript（フレームワーク不使用）

## ライセンス

MIT License

---

作成: Agent ZERO
