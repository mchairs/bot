'use strict';

let Player = require('./player.js');
let assert = require('assert');

describe('Player', () => {
    describe('constructor', () => {
        it('Should create a player with some default options', () => {
            let p = new Player('John-117', {});
            assert.equal(p.hasTheForce, true);
            assert.equal(p.id, 'John-117');
        });
    });
});
