# random-something

> A collection of simple and lightweight randomizers for JavaScript (TypeScript friendly)

## Packages

- [`@random/number`](https://github.com/Raiondesu/random-something/tree/master/packages/number#readme)
- [`@random/boolean`](https://github.com/Raiondesu/random-something/tree/master/packages/boolean#readme)

## Installation and usage

For each individual package - see links above.

If you want everything at once, just do:
```
npm i -S @random/all
```
and then
```js
// Every @random package is contained in this object by their respective name
const random = require('@random/all');

// For example - `@random/number` and `@random/boolean`:
const randomNumber = random.number(0, 10); // random number from 0 to 10 (inclusive)
const randomBoolean = random.boolean();    // half the chance of getting `true` or `false`
const probablyTrue = random.boolean(0.99); // 99% of getting `true`
```
