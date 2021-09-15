import {CompareResult} from 'types';

export function compareNumbers(a: number, b: number): CompareResult {
  return (a === b) ? CompareResult.EQUAL : (a > b) ?
    CompareResult.GREATER :
    CompareResult.LESS;
}
