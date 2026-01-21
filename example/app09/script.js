// カラーピッカーアプリ
class ColorPicker {
    static DEFAULT_COLOR = '#3B82F6';
    static SHADOW_OPACITY = '4d'; // 30% opacity

    constructor() {
        this.colorInput = document.getElementById('colorInput');
        this.hexInput = document.getElementById('hexInput');
        this.rgbInput = document.getElementById('rgbInput');
        this.hslInput = document.getElementById('hslInput');
        this.colorPreview = document.getElementById('colorPreview');
        this.hexValue = document.getElementById('hexValue');
        this.paletteColors = document.querySelectorAll('.palette-color');

        // nullチェック
        if (!this.colorInput || !this.hexInput || !this.rgbInput ||
            !this.hslInput || !this.colorPreview || !this.hexValue) {
            console.error('必要な要素が見つかりません');
            return;
        }

        this.init();
    }

    init() {
        // カラー入力のイベント
        this.colorInput.addEventListener('input', (e) => this.setColor(e.target.value));

        // HEX入力のイベント
        this.hexInput.addEventListener('input', (e) => this.handleHexInput(e.target.value));
        this.hexInput.addEventListener('blur', (e) => this.handleHexBlur(e.target.value));

        // パレットのイベント
        this.paletteColors.forEach(color => {
            color.addEventListener('click', () => this.setColor(color.dataset.color));
        });

        // 初期色を設定
        this.setColor(ColorPicker.DEFAULT_COLOR);
    }

    setColor(hex) {
        // HEXを正規化
        const normalizedHex = this.normalizeHex(hex);
        if (!normalizedHex) return;

        // 各入力を更新
        this.colorInput.value = normalizedHex;
        this.hexInput.value = normalizedHex;
        this.hexInput.classList.remove('error');

        // RGBとHSLを計算
        const rgb = this.hexToRgb(normalizedHex);
        const hsl = this.rgbToHsl(rgb.r, rgb.g, rgb.b);

        this.rgbInput.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        this.hslInput.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

        // プレビューを更新
        this.colorPreview.style.backgroundColor = normalizedHex;
        this.colorPreview.style.boxShadow = `0 10px 30px ${normalizedHex}${ColorPicker.SHADOW_OPACITY}`;
        this.hexValue.textContent = normalizedHex;

        // ARIAラベルを更新
        this.colorPreview.setAttribute('aria-label', `現在選択中の色: ${normalizedHex}`);
    }

    handleHexInput(value) {
        // 入力中はバリデーションのみ
        if (!this.isValidHex(value)) {
            this.hexInput.classList.add('error');
        } else {
            this.hexInput.classList.remove('error');
        }
    }

    handleHexBlur(value) {
        const normalized = this.normalizeHex(value);
        if (normalized) {
            this.setColor(normalized);
        } else {
            this.hexInput.value = this.colorInput.value;
            this.hexInput.classList.remove('error');
        }
    }

    normalizeHex(hex) {
        // #を削除
        let value = hex.replace(/^#/, '');

        // 3文字のHEXを6文字に
        if (value.length === 3) {
            value = value.split('').map(c => c + c).join('');
        }

        // バリデーション
        if (!/^[0-9A-Fa-f]{6}$/.test(value)) {
            return null;
        }

        return '#' + value.toUpperCase();
    }

    isValidHex(value) {
        const test = value.replace(/^#/, '');
        return /^[0-9A-Fa-f]{6}$/.test(test) || /^[0-9A-Fa-f]{3}$/.test(test);
    }

    hexToRgb(hex) {
        const value = hex.replace(/^#/, '');
        const num = parseInt(value, 16);
        return {
            r: (num >> 16) & 255,
            g: (num >> 8) & 255,
            b: num & 255
        };
    }

    rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }
}

// アプリ起動
document.addEventListener('DOMContentLoaded', () => {
    new ColorPicker();
});
