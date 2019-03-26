var random = (function (exports) {
    'use strict';

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

    const charsPadding = 32;
    const charsAmount = 126 - 32;
    const defaultSeed = (() => {
        let seed = '';
        for (let char = charsPadding; char <= charsAmount; char++) {
            seed += String.fromCharCode(char);
        }
        return seed;
    })();
    const defaultFilter = /./;
    const defaultLength = 10;
    /**
     * Generates random string
     *
     * @param optionsOrLength string's length or object-style options
     * @param seed (optional) a string to be used as a seed for the new random string
     * @param filter to filter the resulting string by
     */
    function randomString(optionsOrLength, seed, filter) {
        let _length = defaultLength;
        let _filter = defaultFilter;
        let _seed = defaultSeed;
        if (typeof optionsOrLength === 'object') {
            _seed = optionsOrLength.seed || defaultSeed;
            _filter = optionsOrLength.filter || defaultFilter;
            _length = typeof optionsOrLength.length === 'number' ? optionsOrLength.length : defaultLength;
        }
        else if (typeof optionsOrLength === 'number') {
            _length = optionsOrLength;
            _filter = filter || defaultFilter;
            _seed = seed || defaultSeed;
        }
        var result = '';
        for (let i = 0; i < _length; i++) {
            result += _seed.split('')
                .sort(() => randomNumber(-1, 1))
                .find(char => _filter.test(char));
        }
        return result;
    }

    /**
     * Generates a random boolean with given probability
     *
     * @param {number} truthProbability a probability of getting `true`, from 0 to 1
     */
    function randomBoolean(truthProbability) {
        truthProbability = typeof truthProbability !== 'number' ? 0.499 : truthProbability;
        return Math.random() > truthProbability;
    }

    /**
     * Generates random dates based on a range
     *
     * @param { IDateRange } range
     */
    function randomDate(range) {
        range = typeof range === 'object' ? range : { from: new Date(0), to: new Date(Number.MAX_SAFE_INTEGER) };
        return new Date(randomNumber(+range.from, +range.to));
    }

    exports.boolean = randomBoolean;
    exports.date = randomDate;
    exports.number = randomNumber;
    exports.string = randomString;

    return exports;

}({}));
