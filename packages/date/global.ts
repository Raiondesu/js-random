import randomDate from './index';

declare global {
  interface DateConstructor {
    random: typeof randomDate;
  }
}

Date.random = randomDate;
