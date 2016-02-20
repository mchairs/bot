'use strict';

const oAuth = require('./oauth.controller.js');
const sinon = require('sinon');
const assert = require('assert');

describe('oAuth Controller', () => {
    it('should send a 500 in the response on a failure', () => {
        oAuth({}, {}, {
            status: (errorCode) => {
                assert.equal(errorCode, 500);
                return {
                    send: sinon.spy()
                };
            }
        });
    });

    it('should respond with success without an error', () => {
        var res = {
            send: sinon.spy()
        };
        oAuth(undefined, {}, res);
        assert(res.send.calledOnce);
    });
});
