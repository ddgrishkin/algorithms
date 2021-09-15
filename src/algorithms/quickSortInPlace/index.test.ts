import {quickSortInPlace} from './index';
import {compare} from 'helpers/compare';

describe('quickSort', () => {
  const cases = [
    {
      input: [],
      output: [],
      description: 'Empty array',
    },
    {
      input: [1],
      output: [1],
      description: 'Single element array',
    },
    {
      input: [1,2],
      output: [1,2],
      description: 'Two elements array',
    },
    {
      input: [1,1],
      output: [1,1],
      description: 'Two equal elements array',
    },
    {
      input: [3,2,1],
      output: [1,2,3],
      description: 'Three elements array',
    },
    {
      input: [3,3,3],
      output: [3,3,3],
      description: 'Three equal elements array',
    },
    {
      input: [19,0,3,5],
      output: [0,3,5,19],
      description: 'Four elements array',
    },
    {
      input: [0,0,0,0],
      output: [0,0,0,0],
      description: 'Four equal elements array',
    },
    {
      input: [10,9,54,1,2,9,67,101,10,0],
      output: [0,1,2,9,9,10,10,54,67,101],
      description: 'Ten elements array',
    },
  ];

  cases.forEach((caseItem) => {
    it(caseItem.description, () => {
      expect(quickSortInPlace(caseItem.input, compare)).toEqual(caseItem.output);
    });
  });
});
