'use strict';

const GameService = require('../../game/services/game.service.js');
const log = require('../../log.js');
const chrono = require('chrono-node');

module.exports = {
    resolve: (bot, msg) => {
        let date = chrono.parseDate(msg.match[1]);
        if (date) {
            GameService.create(date, bot.config.id, (err, game) => {
                if (!err) {
                    bot.reply(msg, `Ok, I've scheduled a game at ${game.date}. Please opt in if you would`
                        + ` like to play.`);
                } else {
                    bot.reply(msg, 'Something unexpectedly Unicorn-like occurred.');
                    log.error('Error resolving games chat command: ', err);
                }
            });
        } else {
            bot.reply(msg, 'I\'m sorry Dave. I\'m afraid I can\'t do that.');
        }
    }
};
