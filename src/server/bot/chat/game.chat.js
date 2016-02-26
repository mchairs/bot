'use strict';

const GameService = require('../../game/services/game.service.js');
const Extract = require('./extract.js');

module.exports = [{
    func: 'hears',
    args: [
        ['start (.*) (\\d)'],
        ['direct_mention'], (bot, msg) => {
            var time = msg.match[1];
            var chairs = msg.match[2];
            if (time && chairs) {
                GameService.create(new Date(), chairs, Extract.teamId(bot), (err, game) => {
                    if (!err) bot.reply(msg, `Ok, let's start a game at ${game.date} with ${game.chairs} chairs`);
                });
            }
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
