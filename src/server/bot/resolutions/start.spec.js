'use strict';

const assert = require('assert');
const start = require('./start.resolution.js');
const sinon = require('sinon');
const Games = require('../../game/documents/game.doc.js');

describe('Start', () => {
    let CreateStub = (err, results) => {
        return (obj, done) => {
            done(err, results);
        };
    };

    it('It should create an entry in the database if a time was given', () => {
        let createStub = sinon.stub(Games, 'create', CreateStub(null, {
            date: new Date(),
            chairs: undefined
        }));
        let reply = sinon.spy();
        start.resolve({ reply: reply, config: { id: 'id'} }, { match: ['msg', 'date'] });
        assert(reply.called);
        createStub.restore();
    });

    it('It should reply if there was a db error', () => {
        let createStub = sinon.stub(Games, 'create', CreateStub({}, null));
        let reply = sinon.spy();
        start.resolve({ reply: reply, config: { id: 'id'} }, { match: ['msg', 'date'] });
        assert(reply.called);
        createStub.restore();
    });

    it('It should should reply if the command was malformed', () => {
        let reply = sinon.spy();
        start.resolve({ reply: reply, config: { id: 'id'} }, { match: ['msg'] });
        assert(reply.called);
    });
});
