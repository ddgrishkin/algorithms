import {CompareResult} from 'types';

export function compare(a: number, b: number): CompareResult {
  if (a === b) {
    return CompareResult.EQUAL;
  }

  if (a > b) {
    return CompareResult.GREATER;
  }

  return CompareResult.LESS;
}
