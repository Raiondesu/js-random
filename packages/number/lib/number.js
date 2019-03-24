'use strict';

module.exports = number;

/**
 * Generates random number in a specified range
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function number(min, max) {
  min = min || 0;
  max = max || 100;

  return Math.floor(Math.random() * (max - min) + min);
}
