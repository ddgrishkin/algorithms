import {getPivot} from './helpers/getPivot';
import {CompareHandler, CompareResult} from './types';

export function quickSort<T>(source: T[], compare: CompareHandler<T>): T[] {
  if (source.length < 2) {
    return source;
  }

  const left = [];
  const right = [];
  const middle = [];
  const pivot = getPivot(source, compare);

  source.forEach((item) => {
    switch(compare(item, pivot)) {
      case CompareResult.EQUAL:
        middle.push(item);
        break;
      case CompareResult.GREATER:
        right.push(item);
        break;
      case CompareResult.LESS:
        left.push(item);
        break;
    }
  });

  return [
    ...quickSort(left, compare),
    ...middle,
    ...quickSort(right, compare),
  ];
}
