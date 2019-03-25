import { randomBoolean } from './index';

declare global {
  interface BooleanConstructor {
    random: typeof import('./index').randomBoolean;
  }
}

Boolean.random = randomBoolean;
