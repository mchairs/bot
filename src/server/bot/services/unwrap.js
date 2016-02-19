'use strict';

module.exports = (done) => {
    return (err, data) => {
        if (err) {
            return done(err);
        }
        done(null, data);
    };
};
