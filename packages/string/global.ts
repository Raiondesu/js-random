import randomString from './index';

declare global {
  interface StringConstructor {
    random: typeof import('./index').default;
  }
}

String.random = randomString;
