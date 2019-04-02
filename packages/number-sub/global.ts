import randomNumber from './index';

declare global {
  interface NumberConstructor {
    random: typeof import('./index').default;
  }
}

Number.random = randomNumber;
