import {getPivot} from './helpers/getPivot';
import {CompareHandler, CompareResult} from './types';

export function quickSort<T>(source: T[], compare: CompareHandler<T>): T[] {
  if (source.length <= 2) {
    if (source.length < 2) {
      return source;
    }

    return compare(source[0], source[1]) ?
      [source[1], source[0]] :
      source;
  }

  const pivot = getPivot(source, compare);
  const left = [];
  const right = [];
  const middle = [pivot];

  source.forEach((item) => {
    switch(compare(item, pivot)) {
      case CompareResult.GREATER:
        left.push(item);
        break;
      case CompareResult.LESS:
        right.push(item);
        break;
      case CompareResult.EQUAL:
        middle.push(item);
        break;
      default:
        // Do nothing
    }
  });

  return quickSort(left, compare).concat(middle, quickSort(right, compare));
}
