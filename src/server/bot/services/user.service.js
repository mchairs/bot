'use strict';

const Users = require('../documents/user.doc.js');
const unwrapFromResult = require('./unwrap.js');

module.exports = {
    get: (id, done) => {
        Users.findOne({id: id}).lean().exec(unwrapFromResult(done));
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
        Users.find({}).lean().exec(unwrapFromResult(done));
    }
};
