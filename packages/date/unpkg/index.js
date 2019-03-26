var randomDate = (function () {
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

    /**
     * Generates random dates based on a range
     *
     * @param { IDateRange } range
     */
    function randomDate(range) {
        range = typeof range === 'object' ? range : { from: new Date(0), to: new Date(Number.MAX_SAFE_INTEGER) };
        return new Date(randomNumber(+range.from, +range.to));
    }

    return randomDate;

}());
