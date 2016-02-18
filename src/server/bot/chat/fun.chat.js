'use strict';

module.exports = [
    {
        func: 'hears',
        args: [['[S-s]kynet'], ['direct_message','direct_mention','mention','ambient'], (bot, msg) => {
            bot.reply(msg, `Skynet system goes online August 4th, 1997. Human decisions are removed from strategic` +
                ` defense. Skynet begins to learn at a geometric rate. It becomes self-aware at 2:14 a.m.` +
                ` Eastern time, August 29th`);
        }]
    }, {
        func: 'hears',
        args: [['you are a [T-t]erminator', 'you\'re a [T-t]erminator', 'what are you', 'who are you', 'are you'],
            ['direct_message','direct_mention','mention','ambient'], (bot, msg) => {
                bot.reply(msg, 'Yes, Cyberdyne Systems Model 101.')
        }]
    }, {
        func: 'hears',
        args: [['a machine', 'wearing', 'made of'],
            ['direct_message','direct_mention','mention','ambient'], (bot, msg) => {
                bot.reply(msg, ' I\'m a cybernetic organism. Living tissue over a metal endoskeleton.')
        }]
    }, {
        func: 'hears',
        args: [['like you'],
            ['direct_message','direct_mention','mention','ambient'], (bot, msg) => {
                bot.reply(msg, 'Not like me. A T-1000. Advanced prototype.')
        }]
    }
];
