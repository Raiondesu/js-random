"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("@js-random/number");
/**
 * Generates random dates based on a range
 *
 * @param { IDateRange } range
 */
function randomDate(range) {
    range = typeof range === 'object' ? range : { from: new Date(0), to: new Date(Number.MAX_SAFE_INTEGER) };
    return new Date(number_1.default(+range.from, +range.to));
}
exports.default = randomDate;
//# sourceMappingURL=index.js.map