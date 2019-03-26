import randomNumber from './index';

declare global {
  interface NumberConstructor {
    random: typeof randomNumber;
  }
}

Number.random = randomNumber;
