'use strict';

const assert = require('assert');
const sinon = require('sinon');

const Store = require('./store.service.js');
const Team = require('../documents/team.doc.js');

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
                findStub.restore();
                done();
            });
        });
    });

    describe('users', () => {
        it('', () => {

        });
    });

    describe('channels', () => {
        it('', () => {

        });
    });
});
