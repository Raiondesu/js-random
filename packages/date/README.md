# `@js-random/date`

> A simple and lightweight date randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/date
```

## Usage

```js
var randomDate = require('@js-random/date');

var date = randomDate(); // A random date, basically
var from2010To2012 = randomDate({ from: new Date(2010, 1, 1), to: new Date(2010, 1, 1) }); // random date from Jan 1 2010 to Jan 1 2012
```
