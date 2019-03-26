# `@js-random/string`

> A simple and lightweight string randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/string
```

## Usage

**commonjs**:
```js
var randomString = require('@js-random/string').default;
```

**TS/ES6+**:
```ts
import randomString from '@js-random/string';
```

**`<script> tag`**:
```html
<script src="https://unpkg.com/@js-random/string"></script>
```

```js
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

## Global version

This package also has a global version, which introduces side-effects by exposing the api as `String.random()` function.

### Import

**commonjs**:
```js
require('@js-random/string/lib/global');
```

**ES6+**:
```ts
import '@js-random/string/module/global';
```

**TS**:
```ts
import '@js-random/string/module/global';
```

**`<script> tag`**
```html
<script src="https://unpkg.com/@js-random/string/unpkg/global"></script>
```

### Usage

```js
// A random 10-symbol string. Probably something like "2P*D:4[T9="
var string = String.random();

// Random string of length 4, with a seed of 'Hello, World!' filtered by /[HW,erld]/ for each symbol
var hell_comma_wrld = String.random(4, 'Hello, World!', /[HW,erld]/);

// Object-style parameter is also available:
hell_comma_wrld = String.random({
  length: 4,
  seed: 'Hello, World!',
  filter: /[HW,erld]/
});
```

## Other packages

Please, have a look at other packages from `@js-random` series:

- `@js-random/all` - all the randomizers in one package - [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/all#readme), [NPM](https://www.npmjs.com/@js-random/string)
- `@js-random/number` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/number#readme), [NPM](https://www.npmjs.com/@js-random/number)
- `@js-random/boolean` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/boolean#readme), [NPM](https://www.npmjs.com/@js-random/boolean)
- `@js-random/date` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/date#readme), [NPM](https://www.npmjs.com/@js-random/date)
