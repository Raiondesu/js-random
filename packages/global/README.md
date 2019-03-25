# `@js-random/global`

> A collection of simple and lightweight randomizers for JavaScript integrated into the native API (TypeScript friendly)

## Installation

```
npm i -S @js-random/global
```

## Usage

Upon importing, the main JS constructors (`Number`, `String`, `Date`, `Boolean`) will recieve a `random` function, which is equivalent to a corresponding `@js-random` package:

**commonjs**:
```js
require('@js-random/global');
```

**TS/ES6+**
```ts
import '@js-random/global';
```

**result**:
```ts
Number.random();  // 42
String.random();  // "@!f33D s)97"
Date.random();    // 23 May 7562 01:41:12:632
Boolean.random(); // false
```

It is also possible to globalize each package individually, by adding a `/` with the original `@js-random/*` package name to the `@js-random/global`:

```ts
import '@js-random/global/number';

Number.random();  // 42
String.random();  // TypeError: 'random' is not a function
Date.random();    // TypeError: 'random' is not a function
Boolean.random(); // TypeError: 'random' is not a function
```

---

One could also want to use this via a `<script>` tag. This is possible using `unpkg`:

```html
<!-- For all packages -->
<script src="https://unpkg.com/@js-random/global"></script>

<!-- For a specific package -->
<script src="https://unpkg.com/@js-random/global/unpkg/number"></script>
<script src="https://unpkg.com/@js-random/global/unpkg/string"></script>
<script src="https://unpkg.com/@js-random/global/unpkg/boolean"></script>
<script src="https://unpkg.com/@js-random/global/unpkg/date"></script>
```
