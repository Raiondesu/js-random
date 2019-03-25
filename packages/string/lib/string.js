'use strict';

module.exports = randomString;

var randomNumber = require('@js-random/number');
var charsPadding = 32;
var charsAmount = 126 - 32;

/**
 * Generates random string
 *
 * @param {number | { length?: number, seed?: string, filter?: RegExp }} optionsOrLength string's length or object-style options
 * @param {string | undefined} seed (optional) a string to be used as a seed for the new random string
 * @param {RegExp | undefined} filter to filter the resulting string by
 */
function randomString(optionsOrLength, seed, filter) {
  var length = 10;
  
  if (typeof optionsOrLength === 'object') {
    seed = optionsOrLength.seed;
    filter = optionsOrLength.filter;
    length = optionsOrLength.length;
  } else if (typeof optionsOrLength === 'number') {
    length = optionsOrLength;
  }

  if (!seed) {
    seed = '';

    for (var char = charsPadding; char <= charsAmount; char++) {
      seed += String.fromCharCode(char);
    }
  }

  if (!filter) {
    filter = /.*/g
  }

  var result = '';

  for (var i = 0; i < length; i++) {
    result += seed.split('').sort(function () { return randomNumber(-1, 1) }).find(function (char) { return filter.test(char) });
  }

  return result;
}
