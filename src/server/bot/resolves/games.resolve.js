'use strict';

const GameService = require('../../game/services/game.service.js');
const log = require('../../log.js');

module.exports = {
    resolve: (bot, msg) => {
        GameService.all(bot.config.id, (err, games) => {
            if (!err) {
                if (games.length < 1) {
                    bot.reply(msg, `There are no upcoming games.`);
                }
                let r = 'Ok, here are the upcoming games:\n';
                for (let g of games) {
                    r += `${g.date} with ${g.chairs} chairs.\n`;
                }
                bot.reply(msg, r);
            } else {
                bot.reply(msg, 'Something unexpectedly Unicorn-like occurred.');
                log.error('Error resolving games chat command: ', err);
            }        
        });
    }
};
