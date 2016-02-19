'use strict';

const Channels = require('../documents/channel.doc.js');
const unwrapFromResult = require('./unwrap.js');

module.exports = {
    get: (id, done) => {
        Channels.findOne({id: id}).lean().exec(unwrapFromResult(done));
    },

    save: (data, done) => {
        Channels.findOneAndUpdate({
            id: data.id
        }, data, {
            upsert: true,
            new: true
        }, done);
    },

    all: (done) => {
        Channels.find({}).lean().exec(unwrapFromResult(done));
    }
};
