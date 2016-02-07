import Player from '../bot/game/player.js';
import assert from 'assert';

describe('Player', () => {
  describe('constructor', () => {
    it('Should create a player with some default options', function() {
      let p = new Player('John-117', {});
      assert.equal(p.hasTheForce, true);
      assert.equal(p.id, 'John-117');
    });
  });
});
