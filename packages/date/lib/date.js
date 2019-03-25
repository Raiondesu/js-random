'use strict';

module.exports = randomDate;

var randomNumber = require('@js-random/number');

/**
 * Generates random dates based on a range
 *
 * @param {{ from?: Date, to?: Date }} range
 * @returns
 */
function randomDate(range) {
  range = typeof range === 'object' ? range : { from: new Date(0), to: new Date(Number.MAX_SAFE_INTEGER) };

  return new Date(randomNumber(+range.from, +range.to));
}
