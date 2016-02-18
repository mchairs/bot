'use strict';

module.exports = [ {
        func: 'on',
        args: ['channel_joined', (bot) => bot.say('I\'m here!')]
    }, {
        func: 'on',
        args: ['direct_mention', (bot, msg) => bot.reply(msg, 'Hello. Who is your daddy, and what does he do?')]
    }, {
        func: 'on',
        args: ['direct_message', (bot, msg) => bot.reply(msg, 'Hello. I\'m detective John Kimble!')]
    }, {
        func: 'hears',
        args: ['hello', ['direct_message', 'direct_mention', 'mention'], (bot, msg) => bot.reply(msg, 'Hello')]
    }
];
