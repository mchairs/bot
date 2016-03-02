'use strict';

module.exports = [{
    func: 'hears',
    args: [['[S-s]kynet'], ['direct_message','direct_mention','mention'], (bot, msg) => {
        bot.reply(msg, `Skynet system goes online August 4th, 1997. Human decisions are removed from strategic` +
            ` defense. Skynet begins to learn at a geometric rate. It becomes self-aware at 2:14 a.m.` +
            ` Eastern time, August 29th`);
    }],
}, {
    func: 'hears',
    args: [['[A-a]re you a [T-t]erminator', '[Y-y]ou\'re a [T-t]erminator'],
    ['direct_message','direct_mention','mention'], (bot, msg) => {
        bot.reply(msg, 'Yes, Cyberdyne Systems Model 101.');
    }]
}, {
    func: 'hears',
    args: [['[W-w]ho are you'],
    ['direct_message','direct_mention','mention'], (bot, msg) => {
        bot.reply(msg, 'I\'m a Terminator. Cyberdyne Systems Model 101.');
    }]
}, {
    func: 'hears',
    args: [['[A-a]re you a machine', '[W-w]hat are you wearing', '[W-w]hat are you made of'],
    ['direct_message','direct_mention','mention'], (bot, msg) => {
        bot.reply(msg, ' I\'m a cybernetic organism. Living tissue over a metal endoskeleton.');
    }]
}, {
    func: 'hears',
    args: [['[I-i]s .* like you'],
    ['direct_message','direct_mention','mention'], (bot, msg) => {
        bot.reply(msg, 'Not like me. A T-1000. Advanced prototype.');
    }]
}];
