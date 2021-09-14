import {compare} from './compare';
import {CompareResult} from '../types';

describe('compare', () => {
  const cases = [
    {
      a: 1,
      b: 1,
      result: CompareResult.EQUAL,
      description: 'Equal',
    },
    {
      a: 2,
      b: 1,
      result: CompareResult.GREATER,
      description: 'Greater',
    },
    {
      a: 0,
      b: 1,
      result: CompareResult.LESS,
      description: 'Less',
    },
  ];

  cases.forEach((item) => {
    it(item.description, () => {
      expect(compare(item.a, item.b)).toBe(item.result);
    });
  });
});
