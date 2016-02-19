'use strict';

module.exports = [ {
        func: 'on',
        args: ['channel_joined', (bot) => bot.say('I\'m here!')]
    }, {
        func: 'hears',
        args: [['[H-h]ello', '[H-h]i'], 'direct_mention',
            (bot, msg) => bot.reply(msg, 'Hello. Who is your daddy, and what does he do?')]
    }, {
        func: 'on',
        args: ['direct_message', (bot, msg) => bot.reply(msg, 'Hello. I\'m detective John Kimble!')]
    }
];
