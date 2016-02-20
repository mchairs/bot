'use strict';

const should = require('should');
const log = require('./log.js');

describe('Log', () => {
    it('Returns a logger', () => {
        log.should.be.instanceOf(Object);
        should.exist(log.info);
    });
});
