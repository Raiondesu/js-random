# `@js-random/boolean`

> A simple and lightweight boolean randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/boolean
```

## Usage

**commonjs**:
```js
var randomBoolean = require('@js-random/boolean').default;
```

**TS/ES6+**:
```ts
import randomBoolean from '@js-random/boolean';
```

**`<script> tag`**:
```html
<script src="https://unpkg.com/@js-random/boolean"></script>
```

```ts
var boolean = randomBoolean(); // from 0 to 100 (inclusive)
var fromTwoToTen = randomBoolean(2, 10); // random boolean from `2` to `10` (inclusive)
```

## Global version

This package also has a global version, which introduces side-effects by exposing the api as `Boolean.random()` function.

### Import

**commonjs**:
```js
require('@js-random/boolean/lib/global');
```

**ES6+**:
```ts
import '@js-random/boolean/module/global';
```

**TS**:
```ts
import '@js-random/boolean/module/global';
```

**`<script> tag`**
```html
<script src="https://unpkg.com/@js-random/boolean/unpkg/global"></script>
```

### Usage

```js
var boolean = Boolean.random(); // `true` or `false`

var probablyTrue = Boolean.random(0.99); // 99% chance of getting `true`
```

## Other packages

Please, have a look at other packages from `@js-random` series:

- `@js-random/all` - all the randomizers in one package - [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/all#readme), [NPM](https://www.npmjs.com/@js-random/string)
- `@js-random/number` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/number#readme), [NPM](https://www.npmjs.com/@js-random/number)
- `@js-random/string` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/string#readme), [NPM](https://www.npmjs.com/@js-random/string)
- `@js-random/date` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/date#readme), [NPM](https://www.npmjs.com/@js-random/date)
