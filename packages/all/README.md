# @js-random/all

> A collection of simple and lightweight randomizers for JavaScript (TypeScript friendly)

## Packages

Here's a list of packages that are included in this build:

- `@js-random/number` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/number#readme), [NPM](https://www.npmjs.com/@js-random/number)
- `@js-random/string` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/string#readme), [NPM](https://www.npmjs.com/@js-random/string)
- `@js-random/boolean` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/boolean#readme), [NPM](https://www.npmjs.com/@js-random/boolean)
- `@js-random/date` [GitHub repo](https://github.com/Raiondesu/js-random/tree/master/packages/date#readme), [NPM](https://www.npmjs.com/@js-random/date)

## Installation

For each individual package - see links above.

If you want everything at once, just do:
```
npm i -S @js-random/all
```

## Usage

There are two ways to use `@js-random/all`: imported and global.

### Imported

This way you need to import the object containing all the randomizers yourself:

**commonjs**:
```js
// Every @js-random package is contained in this object by their respective name
const random = require('@js-random/all');
```

**TS/ES6+**
```ts
import * as random from '@js-random/all';
```

**`<script>` tag**
```html
<script src="https://unpkg.com/@js-random/all"></script>
```

```ts
// For example - `@js-random/number` and `@js-random/boolean`:
const randomNumber = random.number(0, 10); // random number from 0 to 10 (inclusive)
const randomBoolean = random.boolean();    // half the chance of getting `true` or `false`
const probablyTrue = random.boolean(0.99); // 99% of getting `true`
```

### Global

This setup introduces side-effects: each package's function is inserted into global constructors as `random()` method:

**commonjs**
```js
require('@js-random/all/lib/global');
```

**ES6+**
```js
import '@js-random/all/module/global';
```

**TS**
```ts
import '@js-random/all/global';
```

and then:

```ts
const randomNumber = Number.random(0, 10);
const probablyTrue = Boolean.random(0.99); // 99% of getting `true`
// Same is true for String, Date and etc.
```
