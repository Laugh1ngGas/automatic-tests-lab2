import { expect } from 'chai';
import { transpose } from '../src/matrix.js'; 

describe('TDD Matrix Library', () => {

  describe('transpose', () => {
    it('should transpose a 2x2 matrix', () => {
      const matrix = [[1, 2], [3, 4]];
      const expected = [[1, 3], [2, 4]];
      
      const result = transpose(matrix);
      
      expect(result).to.deep.equal(expected);
    });
  });

});