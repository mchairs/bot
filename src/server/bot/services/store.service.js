'use strict';

let channel = require('./channel.service.js');
let team = require('./team.service.js');
let user = require('./user.service.js');

module.exports = {
    teams: {
        get: team.get,
        save: team.save,
        all: team.all
    },
    users: {
        get: user.get,
        save: user.save,
        all: user.all
    },
    channels: {
        get: channel.get,
        save: channel.save,
        all: channel.all
    }
};
