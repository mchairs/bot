'use strict';

const GameService = require('../../game/services/game.service.js');

module.exports = {
    resolve: (bot, msg) => {
        GameService.all(bot.config.id, (err, games) => {
            if (!err) {
                if (games.length < 0) {
                    body.reply(msg, `There are no upcoming games.`);
                }
                let r = 'Ok, here are the upcoming games:\n';
                for (let g of games) {
                    r += `${g.date} with ${g.chairs} chairs.\n`;
                }
                bot.reply(msg, r);
            }
        });
    }
};
