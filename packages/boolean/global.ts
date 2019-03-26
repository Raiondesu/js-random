import randomBoolean from './index';

declare global {
  interface BooleanConstructor {
    random: typeof randomBoolean;
  }
}

Boolean.random = randomBoolean;
