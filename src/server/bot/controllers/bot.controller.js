'use strict';

const botkit = require('botkit');
const store = require('../services/store.service.js');
const oauth = require('./oauth.controller.js');
const log = require('../../log.js');
const async = require('async');

class BotController {
    constructor() {
        this._bots = {};
    }

    init(configData) {
        this.botkit = botkit.slackbot({ storage: store });
        this.botkit
            .configureSlackApp(configData)
            .on('create_bot', (bot, config) => {
                if (!this._botExists(bot)) {
                    this._startBot(bot, (err) => {
                        this._handleStartABot(err);
                    });
                }
            });

        return this;
    }

    attachExpress(app) {
        this.botkit
            .createWebhookEndpoints(app)
            .createOauthEndpoints(app, oauth);
        return this;
    }

    connectTeams(done) {
        this.botkit.storage.teams.all((err, teams) => {
            if (err) {
                return done(err);
            }

            async.eachSeries(teams, (t, done) => {
                if (t.bot) {
                    this._startBot(this.botkit.spawn(teams[t], (err) => {
                        this._handleStartABot(err);
                        done();
                    }));
                }
            });

            done(undefined, teams);
        });
    }

    use(middleware) {
        middleware.forEach((obj) => {
            this.botkit[obj.func](...obj.args);
        });
    }

    _addBot(bot) {
        this._bots[bot.config.token] = bot;
    }

    _botExists(bot) {
        return !!this._bots[bot.config.token];
    }

    _startBot(bot, done) {
        bot.startRTM(done);
    }

    _handleStartABot(err) {
        if (err) {
            log.error('Error connecting bot to Slack:', err);
        } else {
            log.info('Bot connected:', bot);
            this._addBot(bot);
        }
    }
}

module.exports = new BotController();
