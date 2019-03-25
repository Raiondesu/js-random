import { randomDate } from './index';

declare global {
  interface DateConstructor {
    random: typeof import('./index').randomDate;
  }
}

Date.random = randomDate;
