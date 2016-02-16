'use strict';

let User = require('../documents/user.doc.js');

module.exports = {
    get: (userId, done) => {
        User.find({userId: userId}, done);
    },

    save: (userData, done) => {
        User.create(userData, done);
    },

    all: (done) => {
        User.find({}, done);
    }
};
