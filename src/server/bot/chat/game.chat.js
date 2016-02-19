'use strict';

module.exports = [
    {
        func: 'hears',
        args: [['start (.*) (\\d)'], ['direct_mention'], (bot, msg) => {
            var time = msg.match[1];
            var numchairs = msg.match[2];
            bot.reply(msg, `Ok, let's start a game at ${time} with ${numchairs} chairs`);
        }]
    }, {
        func: 'hears',
        args: [['sit (\\d)'], ['direct_message'], (bot, msg) => {
            var c = msg.match[1];
            bot.reply(msg, `Ok, you can sit on ${c}`);
        }]
    }, {
        func: 'hears',
        args: [['force (\\d)'], ['direct_message'], (bot, msg) => {
            var c = msg.match[1];
            bot.reply(msg, `Ok, you can force on ${c}`);
        }]
    }
];
