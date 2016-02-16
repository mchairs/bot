'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Store = require('./store.service.js');
const Team = require('../documents/team.doc.js');
const User = require('../documents/user.doc.js');
const Channel = require('../documents/channel.doc.js');

describe('Store', () => {
    describe('teams', () => {
        let t = {
            teamId: 'blueTeam',
            stuff: 'some stuff'
        };

        let aBunchOfTeams = [
            { teamId: 'blueTeam' },
            { teamId: 'redTeam' },
            { teamId: 'theATeam' }
        ];

        let createStub, findStub;

        beforeEach(() => {
            createStub = sinon.stub(Team, 'create', function(args, done) {
                assert.deepEqual(args, t);
                done(undefined, {});
            });

            findStub = sinon.stub(Team, 'find', function(args, done) {
                if (Object.keys(args).length < 1) {
                    done(undefined, aBunchOfTeams);
                } else {
                    assert.deepEqual(args, { teamId: t.teamId });
                    done(undefined, t);
                }
            });
        });

        afterEach(() => {
            createStub.restore();
            findStub.restore();
        });

        it('Can save and get the same team', (done) => {
            Store.teams.save(t, () => {
                Store.teams.get(t.teamId, (e, result) => {
                    assert.ok(!e);
                    assert.deepEqual(result, t);
                    done();
                });
            });
        });

        it('Get a bunch of teams', (done) => {
            Store.teams.all((e, results) => {
                assert.ok(!e);
                assert.deepEqual(results, aBunchOfTeams);
                done();
            });
        });
    });

    describe('users', () => {
        let u = {
            userId: 'John-117',
            stuff: 'some stuff'
        };

        let aBunchOfUsers = [
            { userId: 'John-117' },
            { userId: 'Fred-104' },
            { userId: 'Kelly-087' },
            { userId: 'Linda-058' }
        ];

        let createStub, findStub;

        beforeEach(() => {
            createStub = sinon.stub(User, 'create', function(args, done) {
                assert.deepEqual(args, u);
                done(undefined, {});
            });

            findStub = sinon.stub(User, 'find', function(args, done) {
                if (Object.keys(args).length < 1) {
                    done(undefined, aBunchOfUsers);
                } else {
                    assert.deepEqual(args, { userId: u.userId });
                    done(undefined, u);
                }
            });
        });

        afterEach(() => {
            createStub.restore();
            findStub.restore();
        });

        it('Can save and get the same user', (done) => {
            Store.users.save(u, () => {
                Store.users.get(u.userId, (e, result) => {
                    assert.ok(!e);
                    assert.deepEqual(result, u);
                    done();
                });
            });
        });

        it('Get a bunch of users', (done) => {
            Store.users.all((e, results) => {
                assert.ok(!e);
                assert.deepEqual(results, aBunchOfUsers);
                done();
            });
        });
    });

    describe('channels', () => {
        let c = {
            channelId: 'Wildflowers',
            stuff: 'some stuff'
        };

        let aBunchOfChannels = [
            { channelId: 'Wildflowers' },
            { channelId: 'Full Moon Fever' },
            { channelId: 'Damn the Torpedoes' },
            { channelId: 'Southern Accents' }
        ];

        let createStub, findStub;

        beforeEach(() => {
            createStub = sinon.stub(Channel, 'create', function(args, done) {
                assert.deepEqual(args, c);
                done(undefined, {});
            });

            findStub = sinon.stub(Channel, 'find', function(args, done) {
                if (Object.keys(args).length < 1) {
                    done(undefined, aBunchOfChannels);
                } else {
                    assert.deepEqual(args, { channelId: c.channelId });
                    done(undefined, c);
                }
            });
        });

        afterEach(() => {
            createStub.restore();
            findStub.restore();
        });

        it('Can save and get the same channel', (done) => {
            Store.channels.save(c, () => {
                Store.channels.get(c.channelId, (e, result) => {
                    assert.ok(!e);
                    assert.deepEqual(result, c);
                    done();
                });
            });
        });

        it('Get a bunch of channels', (done) => {
            Store.channels.all((e, results) => {
                assert.ok(!e);
                assert.deepEqual(results, aBunchOfChannels);
                done();
            });
        });
    });
});
