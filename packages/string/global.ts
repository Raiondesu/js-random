import { randomString } from './index';

declare global {
  interface StringConstructor {
    random: typeof import('./index').randomString;
  }
}

String.random = randomString;
