'use strict';

import config from './config.js';

if (!config.ok()) {
  console.log('Sorry dude, to launch your bot you need a clientId, clientSecret and port');
}
