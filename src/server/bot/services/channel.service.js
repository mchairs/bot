'use strict';

let Channel = require('../documents/channel.doc.js');

module.exports = {
    get: (channelId, done) => {
        Channel.find({channelId: channelId}, done);
    },
    
    save: (channelData, done) => {
        new Channel(channelData).save(done);
    },

    all: (done) => {
        Channel.find({}, done);
    }
};
