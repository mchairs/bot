'use strict';

let Game = require('./game.js');
let assert = require('assert');
let sinon = require('sinon');

// When I joined the Corps, we didn't have any fancy-schmanzy tanks. We had sticks! Two sticks, and a rock for the
// whole platoon - and we had to share the rock!
let blueTeam = ['John', 'Fred', 'Linda', 'Kelly'];

describe('Game', () => {
    describe('constructor', () => {
        it('Should create a game with some default options', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.numChairs, blueTeam.length - 1);
        });
    });

    describe('tryToSit', () => {
        it('Should not be able to sit on chairs that do not exist', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 20), false);
            assert.equal(g.tryToSit(blueTeam[0], -20), false);
            assert.equal(g.tryToSit(blueTeam[3], 20), false);
            assert.equal(g.tryToSit(blueTeam[3], -20), false);
            assert.equal(g.tryToSit(blueTeam[3], undefined), false);
            assert.equal(g.tryToSit(blueTeam[3], null), false);
        });

        it('non-valid blueTeam can not sit', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit('Leonardo', 1), false);
            assert.equal(g.tryToSit('Michaelangelo', 1), false);
            assert.equal(g.tryToSit('Donatello', 1), false);
            assert.equal(g.tryToSit('Raphael', 1), false);
            assert.equal(g.tryToSit(-1, 1), false);
            assert.equal(g.tryToSit(undefined, 1), false);
            assert.equal(g.tryToSit(null, 1), false);
        });

        it('Player cannot sit on the same seat twice', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.tryToSit(blueTeam[0], 1), true);
            assert.equal(g.tryToSit(blueTeam[0], 0), false, blueTeam[0] + ' already sat on ' + 0);
            assert.equal(g.tryToSit(blueTeam[1], 0), true);
            assert.equal(g.tryToSit(blueTeam[1], 2), true);
            assert.equal(g.tryToSit(blueTeam[1], 0), false);
        });

        it('Player cannot sit on someone', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.tryToSit(blueTeam[1], 0), false);
            assert.equal(g.tryToSit(blueTeam[1], 1), true);
            assert.equal(g.tryToSit(blueTeam[0], 1), false);
            assert.equal(g.tryToSit(blueTeam[2], 1), false);
            assert.equal(g.tryToSit(blueTeam[2], 0), false);
        });

        it('Player can remove himself from current seat to sit on a new seat', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.tryToSit(blueTeam[0], 1), true);
            assert.equal(g.tryToSit(blueTeam[0], 0), false);
            assert.equal(g.tryToSit(blueTeam[0], 1), false);
        });

        it('Player can use The Force and remove another player from a seat', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.useTheForce(blueTeam[1], 0), true);
        });

        it('Player cannot use The Force more than once', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.useTheForce(blueTeam[1], 0), true);
            assert.equal(g.useTheForce(blueTeam[2], 0), true);
            assert.equal(g.tryToSit(blueTeam[0], 1), true);
            assert.equal(g.tryToSit(blueTeam[1], 1), false);
            assert.equal(g.useTheForce(blueTeam[1], 1), false);
        });

        it('Player cannot use The Force to sit on a seat he has already occupied', () => {
            let g = new Game(blueTeam, () => {});
            assert.equal(g.tryToSit(blueTeam[0], 0), true);
            assert.equal(g.tryToSit(blueTeam[1], 0), false);
            assert.equal(g.useTheForce(blueTeam[1], 0), true);
            assert.equal(g.useTheForce(blueTeam[0], 0), false);
            assert.equal(g.useTheForce(blueTeam[0], 1), true);
        });

        it('done is called when all seats have been taken', () => {
            let done = sinon.spy();
            let g = new Game(blueTeam, done);
            g.tryToSit(blueTeam[0], 0);
            g.tryToSit(blueTeam[1], 1);
            g.tryToSit(blueTeam[2], 2);
            assert.equal(done.called, true);
        });

        it('done is not called when only some seats have been taken', () => {
            let done = sinon.spy();
            let g = new Game(blueTeam, done);
            g.tryToSit(blueTeam[0], 0);
            g.tryToSit(blueTeam[1], 1);
            assert.equal(done.called, false);
        });
    });
});
