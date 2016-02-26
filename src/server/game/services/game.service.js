'use strict';

const Games = require('../documents/game.doc.js');
const BotStore = require('../../bot/services/store.service.js');

module.exports = {
    create: (date, chairs, teamId, done) => {
        Games.create({
            date: date,
            chairs: chairs,
            teamId: teamId
        }, done);
    },

    all: (teamId, done) => {
        Games.find({ teamId: teamId }).lean().exec(done);
    }
};
