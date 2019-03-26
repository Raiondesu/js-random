import randomBoolean from './index';

declare global {
  interface BooleanConstructor {
    random: typeof import('./index').default;
  }
}

Boolean.random = randomBoolean;
