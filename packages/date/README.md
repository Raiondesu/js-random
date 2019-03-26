# `@js-random/date`

> A simple and lightweight date randomizer for JavaScript (TypeScript friendly)

## Installation

```
npm i -S @js-random/date
```

## Usage

**commonjs**:
```js
var randomDate = require('@js-random/date').default;
```

**TS/ES6+**:
```ts
import randomDate from '@js-random/date';
```

**`<script> tag`**:
```html
<script src="https://unpkg.com/@js-random/date"></script>
```

```js
var date = randomDate(); // A random date, basically
var from2010To2012 = randomDate({ from: new Date(2010, 1, 1), to: new Date(2010, 1, 1) }); // random date from Jan 1 2010 to Jan 1 2012
```


## Global version

This package also has a global version, which introduces side-effects by exposing the api as `Date.random()` function.

### Import

**commonjs**:
```js
require('@js-random/date/lib/global');
```

**ES6+**:
```ts
import '@js-random/date/module/global';
```

**TS**:
```ts
import '@js-random/date/module/global';
```

**`<script> tag`**
```html
<script src="https://unpkg.com/@js-random/date/unpkg/global"></script>
```

### Usage

```js
var date = Date.random(); // A random date, basically
var from2010To2012 = Date.random({ from: new Date(2010, 1, 1), to: new Date(2010, 1, 1) }); // random date from Jan 1 2010 to Jan 1 2012
```

## Other packages

Please, have a look at other packages from `@js-random` series:

- `@js-random/all` - all the randomizers in one package - [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/all#readme), [NPM](https://www.npmjs.com/@js-random/string)
- `@js-random/number` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/number#readme), [NPM](https://www.npmjs.com/@js-random/number)
- `@js-random/boolean` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/boolean#readme), [NPM](https://www.npmjs.com/@js-random/boolean)
- `@js-random/string` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/string#readme), [NPM](https://www.npmjs.com/@js-random/string)
