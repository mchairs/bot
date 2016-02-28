'use strict';

const GameService = require('../../game/services/game.service.js');

module.exports = {
    resolve: (bot, msg) => {
        let time = msg.match[1];
        if (time) {
            GameService.create(new Date(), bot.config.id, (err, game) => {
                if (!err) bot.reply(msg, `Ok, I've scheduled a game at ${game.date}. Please opt in if you would`
                + ` like to play.`);
            });
        }
    }
};
