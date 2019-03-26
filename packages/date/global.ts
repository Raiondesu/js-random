import randomDate from './index';

declare global {
  interface DateConstructor {
    random: typeof import('./index').default;
  }
}

Date.random = randomDate;
