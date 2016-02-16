'use strict';

let botkit = require('botkit');
let store = require('../services/store.service.js');

module.exports = botkit.slackbot({
    storage: store
});
