# `@js-random/string`

> A simple and lightweight string randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/string
```

## Usage

```js
var randomString = require('@js-random/string');
// All parameters are optional

// A random 10-symbol string. Probably something like "2P*D:4[T9="
var string = randomString();

// Random string of length 4, with a seed of 'Hello, World!' filtered by /[HW,erld]/ for each symbol
var hell_comma_wrld = randomString(4, 'Hello, World!', /[HW,erld]/);

// Object-style parameter is also available:
hell_comma_wrld = randomString({
  length: 4,
  seed: 'Hello, World!',
  filter: /[HW,erld]/
});
```
