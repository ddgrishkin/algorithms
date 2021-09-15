import {getRandomElement} from 'helpers/getRandomElement';
import {CompareResult} from 'types';

export type CompareHandler<T> = (a: T, b: T) => CompareResult;

export function quickSort<T>(source: T[], compare: CompareHandler<T>): T[] {
  if (source.length < 2) {
    return source;
  }

  const left = [];
  const right = [];
  const middle = [];
  const pivot = getRandomElement(source, 0, source.length - 1);

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
