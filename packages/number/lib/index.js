"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates random number in a specified range
 *
 * @param {number} min
 * @param {number} max
 */
function randomNumber(min, max) {
    min = typeof min === 'number' ? min : 0;
    max = typeof max === 'number' ? max : 100;
    return Math.floor(Math.random() * (max - min) + min);
}
exports.default = randomNumber;
//# sourceMappingURL=index.js.map