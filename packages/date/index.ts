import randomNumber from '@js-random/number';

interface IDateRange {
  from: Date;
  to: Date;
}

const defaultRange: IDateRange = {
  from: new Date(0),
  to: new Date((2 << 29) * randomNumber(1, 8046627))
}

/**
 * Generates random dates based on a range
 *
 * @param { IDateRange } range
 */
export default function randomDate(range?: IDateRange): Date {
  range = typeof range === 'object' ? range : defaultRange;

  return new Date(randomNumber(+range.from, +range.to));
}
