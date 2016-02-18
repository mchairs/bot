'use strict';
const path = require('path');

module.exports = {
    port: process.env.PORT,
    db: process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mchairs',
    slack: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        oAuthScopes: [

        ],
        redirectUri: process.env.redirect
    },
    documents: [
        path.resolve(__dirname, 'bot/documents/*.js')
    ],

    ok: function() {
        return this.slack.clientId && this.slack.clientSecret && this.slack.redirectUri && this.port;
    },

    describe: function() {
        return `
        ################################################################################

        Musical Chairs Bot

        Copyright Christopher Asche, Thomas Jansen and Roman Kostka 2016 
        Licensed under MIT

        <> mit Oa Maß

        Web: https://mchairs.chat
        Twitter: @mchairs_chat
        Email: mchairs.chat@gmail.com
        GitHub: https://github.com/mchairs/bot

        Environment

        Client ID: ${this.clientId}
        Client Secret: ${this.clientSecret}
        Port: ${this.port}

        ###############################################################################`;
    }
};
