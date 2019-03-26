/**
 * Generates a random boolean with given probability
 *
 * @param {number} truthProbability a probability of getting `true`, from 0 to 1
 */
export default function randomBoolean(truthProbability) {
    truthProbability = typeof truthProbability !== 'number' ? 0.499 : truthProbability;
    return Math.random() > truthProbability;
}
//# sourceMappingURL=index.js.map