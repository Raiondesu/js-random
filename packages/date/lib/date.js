'use strict';

module.exports = randomDate;

var randomNumber = require('@js-random/number');

function randomDate(range) {
  range = typeof range === 'object' ? range : { from: 0, to: Number.MAX_SAFE_INTEGER };

  return new Date(randomNumber(range.from, range.to));
}
