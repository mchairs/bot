'use strict';

const Start = require('../resolves/start.resolve.js');
const Games = require('../resolves/games.resolve.js');
const Sit = require('../resolves/sit.resolve.js');
const Force = require('../resolves/force.resolve.js');

module.exports = [{
    func: 'hears',
    args: [
        ['start (.*)'],
        ['direct_mention'],
        Start.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['[G-g]ames'],
        ['direct_mention'],
        Games.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['sit (\\d)'],
        ['direct_message'],
        Sit.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['force (\\d)'],
        ['direct_message'],
        Force.resolve
    ]
}];
