'use strict';

const Games = require('../documents/game.doc.js');
const BotStore = require('../../bot/services/store.service.js');

module.exports = {
    create: (date, teamId, done) => {
        Games.create({
            date: date,
            teamId: teamId
        }, done);
    },

    all: (teamId, done) => {
        Games.find({ teamId: teamId }).lean().exec(done);
    }
};
