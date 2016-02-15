'use strict';

let Team = require('../documents/team.doc.js');

module.exports = {
    get: (teamId, done) => {
        Team.find({teamId: teamId}, done);
    },
    
    save: (teamData, done) => {
        new Team(teamData)
        .save(done);
    },

    all: (done) => {
        Team.find({}, done);
    }
};
