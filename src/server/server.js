'use strict';

const config = require('./config.js');
const log = require('./log.js');
const async = require('async');
const glob = require('glob');
const botController = require('./bot/controllers/bot.controller.js');
const express = require('express');
const http = require('http');

let app = new express();

async.series([
    (done) => {
        // Are we ok to start?
        if (!config.ok()) {
            done(`Sorry dude, to launch your bot you need a CLIENT_ID (${config.clientId}),` +
            ` CLIENT_SECRET (${config.slack.clientSecret}), REDIRECT (${config.slack.redirectUri})` +
            ` and PORT (${config.port})`);
        }

        log.info(config.describe());
        done();
    },
    (done) => {
        // Bootstrap MongoDB
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
    },
    (done) => {
        // Bootstrap slack app
        botController
            .init({
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                scopes: config.scopes,
                redirectUri: config.redirectUri
            })
            .attachExpress(app)
            .connectTeams((err, teams) => {
                if (err) {
                    done(err);
                }
                teams.forEach((t) => {
                    log.info(`✓ Connected to team ${t}`);
                });
            });
    }

], (err, results) => {
    if (err) {
        log.error(err);
        process.exit(1);
    }
});

http.createServer(app).listen(config.port);
