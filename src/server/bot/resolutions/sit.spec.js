'use strict';

const assert = require('assert');
const sit = require('./sit.resolution.js');
const sinon = require('sinon');

describe('Sit', () => {
    it('It should call bot.reply', () => {
        let reply = sinon.spy();
        sit.resolve({ reply: reply }, { match: ['foo'] });
        assert(reply.called);
    });
});
