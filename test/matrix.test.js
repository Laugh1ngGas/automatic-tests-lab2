import { expect } from 'chai';
import { transpose, add, multiply } from '../src/matrix.js';

describe('TDD Matrix Library', () => {

  describe('transpose', () => {
    it('should transpose a 2x2 matrix', () => {
      const matrix = [[1, 2], [3, 4]];
      const expected = [[1, 3], [2, 4]];
      
      const result = transpose(matrix);
      
      expect(result).to.deep.equal(expected);
    });
  });

  describe('add', () => {
    it('should correctly add two 2x2 matrices', () => {
        const m1 = [[1, 2], [3, 4]];
        const m2 = [[5, 6], [7, 8]];
        const expected = [[6, 8], [10, 12]];

        const result = add(m1, m2);
        expect(result).to.deep.equal(expected);
    });

    it('should throw an error when adding matrices of different sizes', () => {
        const m1 = [[1, 2], [3, 4]];
        const m2 = [[1], [2]]; 

        expect(() => add(m1, m2)).to.throw('Matrices must have the same dimensions for addition');
    });
  });
});