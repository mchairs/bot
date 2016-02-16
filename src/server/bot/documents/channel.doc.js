'use strict';

let mongoose = require('mongoose');

let ChannelSchema = mongoose.Schema({

}, {
    // I am not sure what yet composes a 'Channel'
    strict: false
});

module.exports = mongoose.model('Channel', ChannelSchema);
