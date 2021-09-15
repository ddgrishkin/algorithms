import {getPivot} from './getPivot';

describe('getPivot', () => {
  const arr = [1,2,3,4,5,6,7];

  new Array(50).fill(null).forEach(() => {
    it('Always returns item of array', () => {
      expect(typeof getPivot(arr, 0, arr.length - 1)).toBe('number');
    });
  });
});
