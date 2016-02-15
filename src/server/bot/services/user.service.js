'use strict';

let User = require('../documents/user.doc.js');

module.exports = {
    get: (userId, done) => {
        User.find({userId: userId}, done);
    },

    save: (userData, done) => {
        new User(userData).save(done);
    },

    all: (done) => {
        User.find({}, done);
    }
};
