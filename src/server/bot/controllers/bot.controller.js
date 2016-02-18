'use strict';

const botkit = require('botkit');
const store = require('../services/store.service.js');
const oauth = require('./oauth.controller.js');
const log = require('../../log.js');

class BotController {
    constructor() {
        this._bots = {};
    }

    init(configData) {
        this.botkit = botkit.slackbot({ storage: store });
        this.botkit
            .configureSlackApp(configData)
            .on('create_bot', function(bot, config) {
                if (!this._botExists(bot)) {
                    this._startBot(bot);
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
                done(err);
            }

            for (let t in teams) {
                if (teams[t].bot) {
                    this._startBot(this.botkit.spawn(teams[t]));
                }
            }

            done(undefined, teams);
        });
    }

    _addBot(bot) {
        this._bots[bot.config.token] = bot;
    }

    _botExists(bot) {
        return !!this._bots[bot.config.token];
    }

    _startBot(bot) {
        bot.startRTM((err) => {
            if (err) {
                log.error('Error connecting bot to Slack:', err);
            } else {
                this._addBot(bot);
            }
        });
    }
}

module.exports = new BotController();
