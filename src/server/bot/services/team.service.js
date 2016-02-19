'use strict';

const Teams = require('../documents/team.doc.js');
const unwrapFromResult = require('./unwrap.js');

module.exports = {
    get: (id, done) => {
        Teams.findOne({id: id}).lean().exec(unwrapFromResult(done));
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
        Teams.find({}).lean().exec(unwrapFromResult(done));
    }
};
