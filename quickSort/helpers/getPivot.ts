import {CompareHandler} from '../types';

export function getPivot<T = unknown>(source: T[], compare: CompareHandler<T>): T {
  if (source.length < 2) {
    return source[0];
  }

  const lastIndex = source.length - 1;

  const left = source[0];
  const right = source[lastIndex];
  const middle = source[Math.ceil((lastIndex) / 2)];

  let max = right;
  let min = left;

  // Find min and max value
  // between two border values in array
  if (compare(left, right)) {
    max = left;
    min = right;
  }

  // If min value greater than middle value
  // that means middle value less than max
  // at this case min - is the average
  if (compare(min, middle)) {
    return min;
  }

  // If min less, than middle - need to compare
  // max and midlle to detect greater value
  // and return average in result
  return compare(max, middle) ? middle : max;
}
