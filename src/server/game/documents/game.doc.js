'use strict';

let mongoose = require('mongoose');

let GameSchema = mongoose.Schema({

}, {
    // I am not sure what yet composes a 'Game'
    strict: false
});

module.exports = mongoose.model('Game', GameSchema);
