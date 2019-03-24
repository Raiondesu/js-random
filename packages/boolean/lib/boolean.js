'use strict';

module.exports = boolean;

/**
 * Generates a random boolean with given probability
 *
 * @param {number} truthProbability a probability of getting `true`, from 0 to 1
 */
function boolean(truthProbability) {
  truthProbability = typeof truthProbability !== 'number' ? 0.499 : truthProbability;

  return Math.random() > truthProbability;
}
