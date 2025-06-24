/**
 * GocciaplayNumber - Basic Number Utilities
 * Author: Gocciaplay
 * License: Custom
 */

const GocciaplayNumber = {
    /**
     * Rounds a number to the specified number of decimal places.
     * @param {number} num - The number to round.
     * @param {number} decimals - Number of decimal places.
     * @returns {number} - The rounded number.
     */
    round(num, decimals = 2) {
        if (typeof num !== 'number' || typeof decimals !== 'number') {
            console.error('[GocciaplayNumber] Invalid parameters.');
            return NaN;
        }
        const factor = Math.pow(10, decimals);
        return Math.round(num * factor) / factor;
    },

    /**
     * Formats a number with thousand separators.
     * @param {number} num - The number to format.
     * @returns {string} - The formatted string.
     */
    formatWithSeparator(num) {
        if (typeof num !== 'number') {
            console.error('[GocciaplayNumber] Invalid parameter.');
            return '';
        }
        return num.toLocaleString();
    }
};

// Example usage:
// console.log(GocciaplayNumber.round(3.14159, 3)); // Output: 3.142
// console.log(GocciaplayNumber.formatWithSeparator(1234567)); // Output: "1,234,567"

module.exports = GocciaplayNumber;
