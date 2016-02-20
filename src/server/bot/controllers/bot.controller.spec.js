'use strict';

const bot = require('./bot.controller.js');
const should = require('should');

describe('Bot Controller', () => {
    it('should initialize the object _bots during its construction', () => {
        bot._bots.should.be.instanceOf(Object);
        Object.keys(bot._bots).length.should.equal(0);
    });

    it('addBot should add a bot to _bots && _botExists should return true iff the bot exists in _bots', () => {
        let b = {
            config: {
                token: 'big damn heroes!'
            }
        };
        should(bot._botExists(b)).not.be.ok();
        bot._addBot(b);
        should(bot._botExists(b)).be.ok();
    });
});
