# `@js-random/number`

> A simple and lightweight number randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/number
```

## Usage

**commonjs**:
```js
var randomNumber = require('@js-random/number').default;
```

**TS/ES6+**:
```ts
import randomNumber from '@js-random/number';
```

**`<script> tag`**:
```html
<script src="https://unpkg.com/@js-random/number"></script>
```

```ts
var number = randomNumber(); // from 0 to 100 (inclusive)
var fromTwoToTen = randomNumber(2, 10); // random number from `2` to `10` (inclusive)
```

## Global version

This package also has a global version, which introduces side-effects by exposing the api as `Number.random()` function.

### Import

**commonjs**:
```js
require('@js-random/number/lib/global');
```

**ES6+**:
```ts
import '@js-random/number/module/global';
```

**TS**:
```ts
import '@js-random/number/module/global';
```

**`<script> tag`**
```html
<script src="https://unpkg.com/@js-random/number/unpkg/global"></script>
```

### Usage

```ts
var number = Number.random(); // from 0 to 100 (inclusive)
var fromTwoToTen = Number.random(2, 10); // random number from `2` to `10` (inclusive)
```
