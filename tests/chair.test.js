import Chair from '../bot/game/chair.js';
import assert from 'assert';

describe('Chair', () => {
  describe('constructor', () => {
    it('Should create a chair with some default options', function() {
      let c = new Chair(5);
      assert.equal(c.index, 5);
      assert.equal(c.isOccupied(), false);
    });
  });
});
