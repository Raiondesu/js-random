# js-random

> A collection of simple and lightweight randomizers for JavaScript (TypeScript friendly)

## Packages

- [`@js-random/all`](https://github.com/Raiondesu/js-random/tree/master/packages/all#readme)
- [`@js-random/number`](https://github.com/Raiondesu/js-random/tree/master/packages/number#readme)
- [`@js-random/string`](https://github.com/Raiondesu/js-random/tree/master/packages/string#readme)
- [`@js-random/boolean`](https://github.com/Raiondesu/js-random/tree/master/packages/boolean#readme)
- [`@js-random/date`](https://github.com/Raiondesu/js-random/tree/master/packages/date#readme)

## Installation and usage

For each individual package - see links above.

If you want everything at once, just do:
```
npm i -S @js-random/all
```
and then
```js
// Every @js-random package is contained in this object by their respective name
const random = require('@js-random/all');

// For example - `@js-random/number` and `@js-random/boolean`:
const randomNumber = random.number(0, 10); // random number from 0 to 10 (inclusive)
const randomBoolean = random.boolean();    // half the chance of getting `true` or `false`
const probablyTrue = random.boolean(0.99); // 99% of getting `true`
```
