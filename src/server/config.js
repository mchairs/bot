'use strict';

module.exports = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    port: process.env.PORT,

    ok: function() {
        return this.clientId && this.clientSecret && this.port;
    },

    describe: function() {
        return `
            ################################################################################

            mchairs.chat
            Musical Chairs Bot

            Copyright Christopher Asche & Thomas Jansen 2016
            Licensed under MIT

            <> mit Oa Maß

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
