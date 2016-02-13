'use strict';

export default {
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
     Musical Chairs for Slack

     Copyright Christopher Asche & Thomas Jansen 2016
     Licensed under MIT

     <> mit ein Mass

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
