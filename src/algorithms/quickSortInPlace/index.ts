import {swap} from 'helpers/swap';
import {getPivot} from 'helpers/getPivot';
import {CompareResult} from 'types';

export type CompareHandler<T> = (a: T, b: T) => CompareResult;

export function quickSortInPlace<T = unknown>(source: T[], compare: CompareHandler<T>): T[] {
  function sort(from: number, to: number) {
    if ((to - from) < 1) {
      return source;
    }

    let left: number = from;
    let right: number = from;
    let pivot: T = getPivot<T>(source, from, to);

    for (let i = from; i <= to; i++) {
      const compareResult = compare(source[i], pivot);

      if (compareResult === CompareResult.LESS) {
        swap(source, i, right);
        swap(source, left++, right++);
      }

      if (compareResult === CompareResult.EQUAL) {
        if (right !== i) {
          swap(source, i, right++);
        }
      }
    }

    sort(from, left - 1);
    sort(right, to);

    return source;
  }

  return sort(0, source.length - 1);
}
