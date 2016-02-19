'use strict';
const path = require('path');
const glob = require('glob');
const async = require('async');
const should = require('should');

const chats = [
    path.resolve(__dirname, './*.chat.js')
];

// tests each chat file to make sure it follows the correct format
describe('Chat files', () => {
    it('should return an array of objects with two parameters, func and args', (done) => {
        async.eachSeries(chats, (p, done) => {
            glob(p, (err, file) => {
                if (file && file.length) {
                    file.forEach((f) => {
                        let chat = require(f);
                        chat.should.be.instanceof(Array);
                        chat.forEach((o) => {
                            o.should.be.an.instanceOf(Object).and.have.property('func');
                            o.should.have.property('args');
                        });
                    });
                    done();
                }
            });
        }, done);
    });
});
