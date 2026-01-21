/**
 * 3D Dice App - Improved Version
 * Features:
 * - Class-based architecture
 * - Accessibility support (ARIA, keyboard navigation)
 * - Security (textContent instead of innerHTML)
 * - Multiple click prevention
 * - Cross-browser compatibility
 */

'use strict';

/**
 * DiceApp - Main application class for 3D dice rolling
 */
class DiceApp {
    /**
     * Initialize the dice application
     */
    constructor() {
        // DOM elements
        this.cube = null;
        this.rollButton = null;
        this.resultValue = null;
        this.historyList = null;

        // State
        this.isRolling = false;
        this.history = [];
        this.maxHistoryItems = 10;

        // Dice face configurations for rotation
        this.faceRotations = {
            1: { x: 0, y: 0 },
            2: { x: -90, y: 0 },
            3: { x: 0, y: -90 },
            4: { x: 0, y: 90 },
            5: { x: 90, y: 0 },
            6: { x: 180, y: 0 }
        };

        // Try to initialize the app
        try {
            this.init();
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Initialize DOM elements and event listeners
     */
    init() {
        // Get DOM elements
        this.cube = document.querySelector('.cube');
        this.rollButton = document.getElementById('rollButton');
        this.resultValue = document.querySelector('.result-value');
        this.historyList = document.getElementById('historyList');

        // Validate elements exist
        if (!this.cube || !this.rollButton || !this.resultValue || !this.historyList) {
            throw new Error('Required DOM elements not found');
        }

        // Set up event listeners
        this.setupEventListeners();

        // Initialize history display
        this.updateHistoryDisplay();
    }

    /**
     * Set up event listeners with keyboard support
     */
    setupEventListeners() {
        // Click event
        this.rollButton.addEventListener('click', () => this.rollDice());

        // Keyboard support (Space and Enter keys)
        this.rollButton.addEventListener('keydown', (event) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                this.rollDice();
            }
        });

        // Global keyboard shortcut (Space key when not focused on button)
        document.addEventListener('keydown', (event) => {
            if (event.key === ' ' && document.activeElement !== this.rollButton) {
                event.preventDefault();
                this.rollDice();
            }
        });
    }

    /**
     * Roll the dice with animation
     */
    rollDice() {
        // Prevent multiple clicks during animation
        if (this.isRolling) {
            return;
        }

        this.isRolling = true;
        this.rollButton.disabled = true;

        // Add rolling animation class
        this.cube.classList.add('rolling');

        // Clear current result during animation
        this.resultValue.textContent = '...';

        // Generate random result (1-6)
        const result = this.generateRandomNumber();

        // Wait for animation to complete, then show result
        setTimeout(() => {
            this.showResult(result);
        }, 1500);
    }

    /**
     * Generate a random number between 1 and 6
     * @returns {number} Random number 1-6
     */
    generateRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }

    /**
     * Show the result and update display
     * @param {number} result - The dice roll result (1-6)
     */
    showResult(result) {
        // Remove rolling class
        this.cube.classList.remove('rolling');

        // Remove all show-* classes
        for (let i = 1; i <= 6; i++) {
            this.cube.classList.remove(`show-${i}`);
        }

        // Add appropriate show-* class for the result
        this.cube.classList.add(`show-${result}`);

        // Update result display using textContent for security
        this.resultValue.textContent = result;

        // Add to history
        this.addToHistory(result);

        // Re-enable button after a short delay
        setTimeout(() => {
            this.isRolling = false;
            this.rollButton.disabled = false;
            this.rollButton.focus();
        }, 300);
    }

    /**
     * Add result to history
     * @param {number} result - The dice roll result to add
     */
    addToHistory(result) {
        const now = new Date();
        const timeStr = this.formatTime(now);

        // Add to beginning of history
        this.history.unshift({
            value: result,
            time: timeStr
        });

        // Limit history to max items
        if (this.history.length > this.maxHistoryItems) {
            this.history = this.history.slice(0, this.maxHistoryItems);
        }

        // Update history display
        this.updateHistoryDisplay();
    }

    /**
     * Format time as HH:MM
     * @param {Date} date - The date to format
     * @returns {string} Formatted time string
     */
    formatTime(date) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    /**
     * Update history display using DocumentFragment for performance
     */
    updateHistoryDisplay() {
        // Clear existing history
        this.historyList.textContent = '';

        // Show empty message if no history
        if (this.history.length === 0) {
            const emptyItem = document.createElement('li');
            emptyItem.classList.add('history-empty');
            emptyItem.textContent = 'まだサイコロを振っていません';
            this.historyList.appendChild(emptyItem);
            return;
        }

        // Create DocumentFragment for batch insertion
        const fragment = document.createDocumentFragment();

        // Add history items
        this.history.forEach((item) => {
            const li = document.createElement('li');
            li.setAttribute('role', 'listitem');

            const valueSpan = document.createElement('span');
            valueSpan.classList.add('history-value');
            valueSpan.textContent = item.value;

            const timeSpan = document.createElement('span');
            timeSpan.classList.add('history-time');
            timeSpan.textContent = item.time;

            li.appendChild(valueSpan);
            li.appendChild(timeSpan);
            fragment.appendChild(li);
        });

        // Append all items at once
        this.historyList.appendChild(fragment);
    }

    /**
     * Handle errors gracefully
     * @param {Error} error - The error to handle
     */
    handleError(error) {
        console.error('DiceApp Error:', error);

        // Try to show error message to user
        if (this.resultValue) {
            this.resultValue.textContent = 'エラー';
        }

        // Re-enable button if disabled
        if (this.rollButton) {
            this.rollButton.disabled = false;
        }

        this.isRolling = false;
    }
}

/**
 * Initialize the app when DOM is ready
 */
function initApp() {
    try {
        new DiceApp();
    } catch (error) {
        console.error('Failed to initialize DiceApp:', error);
    }
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
