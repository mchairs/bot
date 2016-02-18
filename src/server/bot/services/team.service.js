'use strict';

const Teams = require('../documents/team.doc.js');

let unwrapFromList = function(done) {
    return function(err, data) {
        if (err) {
            return done(err);
        }
        done(null, data);
    };
};

module.exports = {
    get: (id, done) => {
        Teams.findOne({id: id}, unwrapFromList(done));
    },

    save: (data, done) => {
        Teams.findOneAndUpdate({
            id: data.id
        }, data, {
            upsert: true,
            new: true
        }, done);
    },

    all: (done) => {
        Teams.find({}, done);
    }
};
