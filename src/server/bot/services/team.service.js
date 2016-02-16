'use strict';

let Team = require('../documents/team.doc.js');

module.exports = {
    get: (teamId, done) => {
        Team.find({teamId: teamId}, done);
    },

    save: (teamData, done) => {
        Team.create(teamData, done);
    },

    all: (done) => {
        Team.find({}, done);
    }
};
