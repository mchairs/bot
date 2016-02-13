'use strict';

import config from './config.js';
import log from './log.js';

if (!config.ok()) {
  log.error(`Sorry dude, to launch your bot you need a CLIENT_ID (${config.clientId}),
    CLIENT_SECRET (${config.clientSecret}) and PORT (${config.port})`);
  process.exit(1);
}

log.info(config.describe());
