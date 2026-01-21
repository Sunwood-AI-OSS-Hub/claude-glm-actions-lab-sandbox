# 3D ダイスアプリ 🎲 | 3D Dice App

![Language](https://img.shields.io/badge/lang-JA/EN-blue.svg)
![Accessibility](https://img.shields.io/badge/accessibility-ARIA-green.svg)
![Security](https://img.shields.io/badge/security-XSS--safe-success.svg)
![Browser](https://img.shields.io/badge/browser-cross--platform-important.svg)

---

[日本語](#日本語) | [English](#english)

---

<a id="日本語"></a>

# 🎲 3D ダイスアプリ (日本語)

## 概要 📖

アクセシビリティとセキュリティを重視した、3Dアニメーション付きダイスアプリケーション。キーボード操作、スクリーンリーダー対応、XSS対策など、モダンなWeb標準に準拠した実装です。

## 特徴 ✨

### アクセシビリティ
- **ARIA属性**: `aria-label`、`aria-live`、`role` 属性でスクリーンリーダー対応
- **キーボードナビゲーション**: スペースキーまたはEnterキーでサイコロを振れる
- **フォーカス表示**: `:focus-visible` でキーボードフォーカスが視覚的にわかりやすい
- **セマンティックHTML**: `main`、`section`、`header`、`footer` など適切な要素を使用

### セキュリティ
- **XSS対策**: `innerHTML` ではなく `textContent` を使用
- **入力検証**: DOM要素の存在チェックとエラーハンドリング

### パフォーマンス
- **GPUアクセラレーション**: `will-change`、`transform` 使用
- **DocumentFragment**: 履歴表示の効率的なDOM操作
- **ベンダープレフィックス**: クロスブラウザ対応

### ユーザビリティ
- **複数クリック防止**: アニメーション中はボタンを無効化
- **履歴機能**: 過去10件の結果を時刻とともに保存
- **レスポンシブデザイン**: モバイル〜デスクトップまで対応

## ファイル構造 📁

```
app08/
├── index.html   # メインのHTMLファイル（ARIA対応）
├── script.js    # クラスベースJavaScript（セキュア実装）
├── style.css    # スタイルシート（ベンダープレフィックス付き）
└── README.md    # このファイル（バイリンガル）
```

## セットアップ 🚀

### インストール

特別なインストールは不要です。

```bash
# リポジトリをクローン
git clone https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox.git

# ディレクトリに移動
cd claude-glm-actions-lab-sandbox/example/app08
```

### 実行

1. `index.html` をブラウザで開く
2. 「サイコロを振る」ボタンをクリック、またはスペースキーを押す
3. 3Dアニメーションと共に結果が表示される
4. 過去の結果は「過去の結果」セクションで確認できる

## キーボードショートカット ⌨️

| キー | 動作 |
|------|------|
| `Space` | サイコロを振る |
| `Enter` | サイコロを振る（ボタンフォーカス時） |

## ブラウザ対応 🌐

| ブラウザ | バージョン |
|----------|----------|
| Chrome | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| Edge | 最新版 |

## アクセシビリティ情報 ♿

- **WCAG 2.1**: レベルAA準拠を目指しています
- **ARIA**: スクリーンリーダー対応
- **キーボード**: 完全にキーボード操作可能
- **色のコントラスト**: 色覚障害を考慮した配色

## 技術スタック 💻

- **HTML5**: セマンティックHTML、ARIA属性
- **CSS3**: 3Dトランスフォーム、アニメーション、メディアクエリ
- **Vanilla JavaScript**: ES6+クラス構文、モジュール化
- **ベンダープレフィックス**: `-webkit-`、`-moz-`、`-ms-`、`-o-`

## 改善点 🔧

コードレビューに基づく以下の改善を実施しました：

### 改善前の問題点
1. アクセシビリティ対応不足（ARIA属性なし）
2. セキュリティリスク（innerHTML使用）
3. アニメーション中の多重クリック可能
4. クロスブラウザ対応不足

### 改善後
- ✅ ARIA属性を追加
- ✅ textContentに変更
- ✅ isRollingフラグで防止
- ✅ ベンダープレフィックス対応

## ライセンス

MIT License

---

<a id="english"></a>

# 🎲 3D Dice App (English)

## Overview 📖

An accessibility-focused and secure 3D dice application with smooth animations. Implements modern web standards including keyboard navigation, screen reader support, and XSS protection.

## Features ✨

### Accessibility
- **ARIA Attributes**: Screen reader support with `aria-label`, `aria-live`, and `role` attributes
- **Keyboard Navigation**: Roll dice using Space or Enter keys
- **Focus Visible**: Clear visual feedback for keyboard focus with `:focus-visible`
- **Semantic HTML**: Proper use of `main`, `section`, `header`, `footer` elements

### Security
- **XSS Protection**: Uses `textContent` instead of `innerHTML`
- **Input Validation**: DOM element existence checks and error handling

### Performance
- **GPU Acceleration**: Uses `will-change` and `transform`
- **DocumentFragment**: Efficient DOM manipulation for history display
- **Vendor Prefixes**: Cross-browser compatibility with `-webkit-`, `-moz-`, `-ms-`, `-o-`

### Usability
- **Multiple Click Prevention**: Button disabled during animation
- **History Feature**: Stores last 10 results with timestamps
- **Responsive Design**: Works on mobile to desktop

## File Structure 📁

```
app08/
├── index.html   # Main HTML file with ARIA attributes
├── script.js    # Class-based JavaScript (secure implementation)
├── style.css    # Stylesheet with vendor prefixes
└── README.md    # This file (bilingual)
```

## Setup 🚀

### Installation

No special installation required.

```bash
# Clone repository
git clone https://github.com/Sunwood-AI-OSS-Hub/claude-glm-actions-lab-sandbox.git

# Navigate to directory
cd claude-glm-actions-lab-sandbox/example/app08
```

### Usage

1. Open `index.html` in a browser
2. Click "Roll Dice" button or press Space key
3. View result with 3D animation
4. Check "History" section for past results

## Keyboard Shortcuts ⌨️

| Key | Action |
|-----|--------|
| `Space` | Roll dice |
| `Enter` | Roll dice (when button focused) |

## Browser Support 🌐

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

## Accessibility Information ♿

- **WCAG 2.1**: Aiming for Level AA compliance
- **ARIA**: Screen reader compatible
- **Keyboard**: Fully keyboard accessible
- **Color Contrast**: Colorblind-friendly palette

## Tech Stack 💻

- **HTML5**: Semantic HTML, ARIA attributes
- **CSS3**: 3D transforms, animations, media queries
- **Vanilla JavaScript**: ES6+ class syntax, modular design
- **Vendor Prefixes**: `-webkit-`, `-moz-`, `-ms-`, `-o-`

## Improvements 🔧

Implemented the following improvements based on code review feedback:

### Previous Issues
1. Lack of accessibility support (no ARIA attributes)
2. Security risks (innerHTML usage)
3. Multiple clicks possible during animation
4. Insufficient cross-browser support

### After Improvements
- ✅ Added ARIA attributes
- ✅ Changed to textContent
- ✅ isRolling flag prevents multiple clicks
- ✅ Added vendor prefixes

## License

MIT License

---

Made with ☕ by Claude & Sunwood-AI-OSS-Hub
