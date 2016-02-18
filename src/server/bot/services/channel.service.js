'use strict';

const Channels = require('../documents/channel.doc.js');

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
        Channels.findOne({id: id}, unwrapFromList(done));
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
        Channels.find({}, done);
    }
};
