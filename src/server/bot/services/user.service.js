'use strict';

let User = require('../documents/user.doc.js');

module.exports = {
    get: () => {
        User.find({userId: userId}, done);
    },

    save: () => {
        
    },

    all: () => {

    }
};
