'use strict';

let Users = require('../documents/user.doc.js');

var unwrapFromList = function(done) {
    return function(err, data) {
        if (err) {
            return done(err);
        }
        done(null, data);
    };
};

module.exports = {
    get: (id, done) => {
        Users.findOne({id: id}, unwrapFromList(done));
    },

    save: (data, done) => {
        Users.findOneAndUpdate({
            id: data.id
        }, data, {
            upsert: true,
            new: true
        }, done);
    },

    all: (done) => {
        Users.find({}, done);
    }
};
