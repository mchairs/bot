'use strict';

const GameService = require('../../game/services/game.service.js');

module.exports = {
    resolve: (bot, msg) => {
        var c = msg.match[1];
        bot.reply(msg, `Ok, you can force on ${c}`);
    }
};
