import randomString from './index';

declare global {
  interface StringConstructor {
    random: typeof randomString;
  }
}

String.random = randomString;
