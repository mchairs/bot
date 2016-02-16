'use strict';

let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({

}, {
    // I am not sure what yet composes a 'User'
    strict: false
});

module.exports = mongoose.model('User', UserSchema);
