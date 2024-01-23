import { merge } from './merge';

describe('merge', () => {
  it('merges two sorted arrays', () => {
    const result = merge([0, 4, 7, 8], [3, 6, 9]);
    expect(result).toEqual([0, 3, 4, 6, 7, 8, 9]);
  });

});
