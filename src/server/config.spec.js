'use strict';

const config = require('./config.js');
const should = require('should');

describe('config', () => {
    it('ok should be ok if the env variables are set', () => {
        config.port = undefined;
        config.clientId = undefined;
        config.clientSecret = undefined;
        config.redirectUri = undefined;

        should(config.ok()).not.be.ok();

        config.port = 'Battery';
        config.clientId = 'Master of Puppets';
        config.clientSecret = 'The Thing That Should Not Be';
        config.redirectUri = 'Sanitarium';

        should(config.ok()).be.ok();
    });
});
