import randomFunction from './index';

declare global {
  interface FunctionConstructor {
    random: typeof randomFunction;
  }
}

Function.random = randomFunction;
