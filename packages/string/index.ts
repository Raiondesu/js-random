const charsPadding = 32;
const charsAmount = 126 - 32;

const defaultSeed = (() => {
  let seed = '';

  for (let char = charsPadding; char <= charsAmount; char++) {
    seed += String.fromCharCode(char);
  }

  return seed
})();

const defaultFilter = /./;
const defaultLength = 10;

interface IStringOptions {
  length?: number;
  seed?: string;
  filter?: RegExp;
}

/**
 * Generates random string
 *
 * @param optionsOrLength string's length or object-style options
 * @param seed (optional) a string to be used as a seed for the new random string
 * @param filter to filter the resulting string by
 */
export default function randomString(optionsOrLength?: number | IStringOptions, seed?: string, filter?: RegExp) {
  let _length = defaultLength;
  let _filter = defaultFilter;
  let _seed = defaultSeed;

  if (typeof optionsOrLength === 'object') {
    _seed = optionsOrLength.seed || defaultSeed;
    _filter = optionsOrLength.filter || defaultFilter;
    _length = typeof optionsOrLength.length === 'number' ? optionsOrLength.length : defaultLength;
  } else if (typeof optionsOrLength === 'number') {
    _length = optionsOrLength;
    _filter = filter || defaultFilter;
    _seed = seed || defaultSeed;
  }

  var result = '';

  for (let i = 0; i < _length; i++) {
    result += _seed.split('')
      .sort(() => Math.random() - 0.5)
      .find(char => _filter.test(char));
  }

  return result;
}
