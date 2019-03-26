(function () {
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

    var charsPadding = 32;
    var charsAmount = 126 - 32;
    var defaultSeed = (function () {
        var seed = '';
        for (var char = charsPadding; char <= charsAmount; char++) {
            seed += String.fromCharCode(char);
        }
        return seed;
    })();
    var defaultFilter = /./;
    var defaultLength = 10;
    /**
     * Generates random string
     *
     * @param optionsOrLength string's length or object-style options
     * @param seed (optional) a string to be used as a seed for the new random string
     * @param filter to filter the resulting string by
     */
    function randomString(optionsOrLength, seed, filter) {
        var _length = defaultLength;
        var _filter = defaultFilter;
        var _seed = defaultSeed;
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
        for (var i = 0; i < _length; i++) {
            result += _seed.split('')
                .sort(function () { return randomNumber(-1, 1); })
                .find(function (char) { return _filter.test(char); });
        }
        return result;
    }

    String.random = randomString;

}());
