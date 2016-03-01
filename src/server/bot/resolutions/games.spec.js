'use strict';

const should = require('should');
const Games = require('./games.resolution.js');
const Game = require('../../game/documents/game.doc.js');
const sinon = require('sinon');
const assert = require('assert');

describe('Games', () => {
    let FindStub = (err, results) => {
        return () => {
            return {
                lean: () => {
                    return { exec: (done) => done(err, results) };
                }
            };
        };
    };

    it('It should reply with a message if there are no games', () => {
        let findStub = sinon.stub(Game, 'find', FindStub(null, []));
        let reply = sinon.spy();
        Games.resolve({ reply: reply, config: { id: ''} }, { match: ['foo'] });
        assert(reply.called);
        findStub.restore();
    });

    it('It should reply with a message if there are games', () => {
        let g = [
            { date: new Date(), chairs: 1 },
            { date: new Date(), chairs: 2 },
            { date: new Date(), chairs: 3 }
        ];

        let findStub = sinon.stub(Game, 'find', FindStub(null, g));
        let reply = sinon.spy();
        Games.resolve({ reply: reply, config: { id: ''} }, { match: ['foo'] });
        assert(reply.called);
        findStub.restore();
    });

    it('It should do something on a db error', () => {
        let findStub = sinon.stub(Game, 'find', FindStub({}, null));
        let reply = sinon.spy();
        Games.resolve({ reply: reply, config: { id: ''} }, { match: ['foo'] });
        assert(reply.called);
        findStub.restore();
    });
});
