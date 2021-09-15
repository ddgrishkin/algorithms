import {swap} from './swap';

describe('getPivot', () => {
  let source;
  let cases = [
    {
      input: [0, 1],
      output: [2,1,3,4,5],
      description: 'Switch elements correctly',
    },
    {
      input: [0, 4],
      output: [5,2,3,4,1],
      description: 'Switch elements correctly #2',
    },
  ];

  beforeEach(() => {
    source = [1,2,3,4,5];
  });

  cases.forEach((item) => {
    it(item.description, () => {
      swap(source, item.input[0], item.input[1]);

      expect(source).toEqual(item.output);
    });
  });
});
