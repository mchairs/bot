'use strict';

let winston = require('winston');
let moment = require('moment');

module.exports = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: () => `[${moment().format('MMMM Do YYYY, h:mm:ss a')}]`,
            colorize: true
        })
    ]
});
