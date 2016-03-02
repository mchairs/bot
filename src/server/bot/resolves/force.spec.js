'use strict';

const assert = require('assert');
const force = require('./force.resolve.js');
const sinon = require('sinon');

describe('Force', () => {
    it('It should call bot.reply', () => {
        let reply = sinon.spy();
        force.resolve({ reply: reply }, { match: ['foo'] });
        assert(reply.called);
    });
});
