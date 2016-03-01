'use strict';

const GameService = require('../../game/services/game.service.js');

module.exports = {
    resolve: (bot, msg) => {
        bot.startConversation(msg, (err, convo) => {
            GameService.all(bot.config.id, (err, games) => {
                if (!err) {
                    if (games.length < 1) {
                        bot.reply(msg, `There are no upcoming games.`);
                    }
                    let r = 'Great! Which game would you like to play?\n';
                    let i = 1;
                    for (let g of games) {
                        r += `${i++} ${g.date} with ${g.chairs} chairs.\n`;
                    }
                    convo.ask(r, (rep, convo) => {
                        convo.say('OK, you\'re in!');
                        convo.next();
                    });
                } else {
                    bot.reply(msg, 'Something unexpectedly Unicorn-like occurred.');
                    log.error('Error resolving opt in command: ', err);
                }
            });
        });
    }
};
