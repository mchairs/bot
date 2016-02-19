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
            id: 'blueTeam',
            stuff: 'some stuff'
        };

        let aBunchOfTeams = [
            { id: 'blueTeam' },
            { id: 'redTeam' },
            { id: 'theATeam' }
        ];

        let createStub, findStub, findOneStub;

        beforeEach(() => {
            createStub = sinon.stub(Team, 'findOneAndUpdate', (id, data, options, done) => {
                assert.deepEqual({ id: t.id}, id);
                done(undefined, {});
            });

            findOneStub = sinon.stub(Team, 'findOne', (args) => {
                assert.deepEqual(args, { id: t.id });
                return {
                    lean: () => {
                        return { exec: (done) => done(null, t) };
                    }
                };
            });

            findStub = sinon.stub(Team, 'find', () => {
                return {
                    lean: () => {
                        return { exec: (done) => done(null, aBunchOfTeams) };
                    }
                };
            });
        });

        afterEach(() => {
            createStub.restore();
            findStub.restore();
            findOneStub.restore();
        });

        it('Can save and get the same team', (done) => {
            Store.teams.save(t, () => {
                Store.teams.get(t.id, (e, result) => {
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
            id: 'John-117',
            stuff: 'some stuff'
        };

        let aBunchOfUsers = [
            { id: 'John-117' },
            { id: 'Fred-104' },
            { id: 'Kelly-087' },
            { id: 'Linda-058' }
        ];

        let createStub, findStub, findOneStub;

        beforeEach(() => {
            createStub = sinon.stub(User, 'findOneAndUpdate', (id, data, options, done) => {
                assert.deepEqual({ id: u.id}, id);
                done(undefined, {});
            });

            findOneStub = sinon.stub(User, 'findOne', (args) => {
                assert.deepEqual(args, { id: u.id });
                return {
                    lean: () => {
                        return { exec: (done) => done(null, u) };
                    }
                };
            });

            findStub = sinon.stub(User, 'find', () => {
                return {
                    lean: () => {
                        return { exec: (done) => done(null, aBunchOfUsers) };
                    }
                };
            });
        });

        afterEach(() => {
            createStub.restore();
            findOneStub.restore();
            findStub.restore();
        });

        it('Can save and get the same user', (done) => {
            Store.users.save(u, () => {
                Store.users.get(u.id, (e, result) => {
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
            id: 'Wildflowers',
            stuff: 'some stuff'
        };

        let aBunchOfChannels = [
            { id: 'Wildflowers' },
            { id: 'Full Moon Fever' },
            { id: 'Damn the Torpedoes' },
            { id: 'Southern Accents' }
        ];

        let createStub, findOneStub, findStub;

        beforeEach(() => {
            createStub = sinon.stub(Channel, 'findOneAndUpdate', (id, data, options, done) => {
                assert.deepEqual({ id: c.id}, id);
                done(undefined, {});
            });

            findOneStub = sinon.stub(Channel, 'findOne', (args) => {
                assert.deepEqual(args, { id: c.id });
                return {
                    lean: () => {
                        return { exec: (done) => done(null, c) };
                    }
                };
            });

            findStub = sinon.stub(Channel, 'find', () => {
                return {
                    lean: () => {
                        return { exec: (done) => done(null, aBunchOfChannels) };
                    }
                };
            });
        });

        afterEach(() => {
            createStub.restore();
            findOneStub.restore();
            findStub.restore();
        });

        it('Can save and get the same channel', (done) => {
            Store.channels.save(c, () => {
                Store.channels.get(c.id, (e, result) => {
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
