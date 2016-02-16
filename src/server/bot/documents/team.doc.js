'use strict';

let mongoose = require('mongoose');

let TeamSchema = mongoose.Schema({

}, {
    // I am not sure what yet composes a 'Team'
    strict: false
});

module.exports = mongoose.model('Team', TeamSchema);
