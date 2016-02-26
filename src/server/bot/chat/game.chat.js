'use strict';

const GameService = require('../../game/services/game.service.js');

module.exports = [{
    func: 'hears',
    args: [
        ['start (.*) (\\d)'],
        ['direct_mention'], (bot, msg) => {
            var time = msg.match[1];
            var chairs = msg.match[2];
            if (time && chairs) {
                GameService.create(new Date(), chairs, bot.config.id, (err, game) => {
                    if (!err) bot.reply(msg, `Ok, let's start a game at ${game.date} with ${game.chairs} chairs.`);
                });
            }
        }
    ]
}, {
    func: 'hears',
    args: [
        ['[G-g]ames'],
        ['direct_mention'], (bot, msg) => {
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
    ]
}, {
    func: 'hears',
    args: [
        ['sit (\\d)'],
        ['direct_message'], (bot, msg) => {
            var c = msg.match[1];
            bot.reply(msg, `Ok, you can sit on ${c}`);
        }
    ]
}, {
    func: 'hears',
    args: [
        ['force (\\d)'],
        ['direct_message'], (bot, msg) => {
            var c = msg.match[1];
            bot.reply(msg, `Ok, you can force on ${c}`);
        }
    ]
}];
