'use strict';

const config = require('./config.js');
const log = require('./log.js');
const async = require('async');
const glob = require('glob');

async.series([
    (done) => {
        // Are we ok to start?
        if (!config.ok()) {
            done(`Sorry dude, to launch your bot you need a CLIENT_ID (${config.clientId}),
            CLIENT_SECRET (${config.clientSecret}) and PORT (${config.port})`);
        }

        log.info(config.describe());
        done();
    },
    (done) => {
        // Boostrap MongoDB
        require('mongoose').connect(config.db, {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }, (err) => {
            if (err) {
                done(err);
            }

            log.info(`✓ Using database ${config.db}`);

            // Bootstrap Mongoose Documents
            async.eachSeries(config.documents, (p, done) => {
                glob(p, (err, file) => {
                    if (file && file.length) {
                        file.forEach((f) => {
                            log.info(`✓ Using document ${f}`);
                            require(f);
                        });
                        done();
                    }
                });
            }, done);
        });
    }

], (err, results) => {
    if (err) {
        log.error(err);
        process.exit(1);
    }
});
