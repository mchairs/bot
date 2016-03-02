'use strict';

const start = require('../resolutions/start.resolution.js');
const games = require('../resolutions/games.resolution.js');
const sit = require('../resolutions/sit.resolution.js');
const force = require('../resolutions/force.resolution.js');
const optIn = require('../resolutions/optin.resolution.js');

module.exports = [{
    func: 'hears',
    args: [
        ['start (.*)'],
        ['direct_mention'],
        start.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['[G-g]ames'],
        ['direct_mention'],
        games.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['sit (\\d)'],
        ['direct_message'],
        sit.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['force (\\d)'],
        ['direct_message'],
        force.resolve
    ]
}, {
    func: 'hears',
    args: [
        ['[O-o]pt in'],
        ['direct_message'],
        optIn.resolve
    ]
}];
