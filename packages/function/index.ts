import randomNumber from '@js-random/number';

type PickBehaviour = 'choose' | 'compose';

interface IFunctionOptions {
  seed: Array<Function> | object;
  behaviour: PickBehaviour;
  throwErrors: boolean;
  allowEmpty: boolean;
}

const defaultOptions: IFunctionOptions = {
  seed: window,
  behaviour: 'choose',
  throwErrors: false,
  allowEmpty: false
};

const chanceOfEmpty = 0.2;

function empty(arg: any, ...other: any[]) {
  if (other && other.length > 0) {
    return [arg, ...other];
  } else {
    return arg;
  }
}

function removeCircular(obj: object): object {
  // Courtesy of https://gist.github.com/zmmbreeze/9408172
  const cache: any[] = [];
  return JSON.parse(JSON.stringify(obj, function(_key: string, value: any) {
      if (typeof value === 'object' && value !== null) {
          if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
          }
          // Store value in our collection
          cache.push(value);
      }
      return value;
  }));
}

function prepareExecutor(f: Function, throwErrors?: boolean) {
  if (throwErrors) {
    return (...args: any[]) => f(...args);
  }

  return (...args: any[]) => {
    try {
      return f(...args);
    } catch (e) {
      return e;
    }
  }
}

function isConstructor(f) {
  try {
    new f();
  } catch (err) {
    if (err.message.indexOf('is not a constructor') >= 0) {
      return false;
    }
  }
  return true;
}

function flattenObject(obj: object, allowEmpty?: boolean): Array<Function> {
  let arr: any[] = [];

  for (let key in obj) {
    const item = obj[key];

    if (typeof item === 'function') {
      if (!isConstructor(item)) {
        arr.push(item);
      }
      continue;
    }

    if (typeof item === 'object') {
      try {
        arr = arr.concat(flattenObject(removeCircular(item), allowEmpty));
      } catch (e) {}

      continue;
    }

    if (allowEmpty) {
      if (Math.random() <= chanceOfEmpty) {
        arr.push(empty);
      } else {
        arr.push(() => item);
      }
    }
  }

  return arr.filter(i => typeof i === 'function');
}

export default function randomFunction(options: Partial<IFunctionOptions> | Array<Function> = defaultOptions) {
  if (Array.isArray(options)) {
    options = { seed: options };
  }

  options.seed = options.seed || defaultOptions.seed;

  if (typeof options.allowEmpty !== 'boolean')
    options.allowEmpty = defaultOptions.allowEmpty;

  if (typeof options.throwErrors !== 'boolean')
    options.throwErrors = defaultOptions.throwErrors;

  if (options.behaviour !== 'choose' && options.behaviour !== 'compose')
    options.behaviour = defaultOptions.behaviour;

  let f: Function;
  let functions: Function[] = flattenObject(options.seed, options.allowEmpty);

  if (functions.length === 0) {
    return empty;
  }

  if (options.behaviour === 'choose') {
    f = functions[randomNumber(0, functions.length - 1)];
  } else {
    const chanceOfCutting = Number('0.' + randomNumber(0, functions.length - 1));
    functions = functions.filter(_ => (Math.random() - chanceOfCutting) > 0);

    f = function composed(...args: any[]) {
      const result = functions.map(func => {
        if (args.length > 1) {
          func(...args.slice(
            randomNumber(0, args.length/2),
            randomNumber(args.length/2, args.length - 1)
          ));
        } else {
          func(...args);
        }
      });

      if (result.length === 1) {
        return result[0];
      }

      return result;
    }
  }

  return prepareExecutor(f, options.throwErrors);
}
