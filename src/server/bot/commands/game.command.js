'use strict';

const Start = require('../resolutions/start.resolution.js');
const Games = require('../resolutions/games.resolution.js');
const Sit = require('../resolutions/sit.resolution.js');
const Force = require('../resolutions/force.resolution.js');

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
