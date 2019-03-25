import { randomNumber } from './index';

declare global {
  interface NumberConstructor {
    random: typeof import('./index').randomNumber;
  }
}

Number.random = randomNumber;
