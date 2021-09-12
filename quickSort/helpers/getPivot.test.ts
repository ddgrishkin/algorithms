import {getPivot} from './getPivot';

function compare(a: number, b: number): number {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}

describe('getPivot', () => {
  const cases = [
    {
      input: [],
      result: undefined,
      description: 'An empty array',
    },
    {
      input: [0],
      result: 0,
      description: 'Single element',
    },
    {
      input: [0, 0],
      result: 0,
      description: 'Two same elements',
    },
    {
      input: [1, 0],
      result: 0,
      description: 'Two elements',
    },
    {
      input: [1, 1, 1],
      result: 1,
      description: 'Three same elements',
    },
    {
      input: [1, 2, 3],
      result: 2,
      description: 'Three elements',
    },
    {
      input: [1, 1, 1, 1],
      result: 1,
      description: 'Four same elements',
    },
    {
      input: [1, 1, 2, 3],
      result: 2,
      description: 'Four elements',
    },
    {
      input: [1, 1, 1, 2, 3],
      result: 1,
      description: 'Five elements',
    },
  ];

  cases.forEach((item) => {
    it(item.description, () => {
      expect(getPivot(item.input, compare)).toEqual(item.result);
    });
  });
});
