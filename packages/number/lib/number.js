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
  min = typeof min === 'number' ? min : 0;
  max = typeof max === 'number' ? max : 100;

  return Math.floor(Math.random() * (max - min) + min);
}
