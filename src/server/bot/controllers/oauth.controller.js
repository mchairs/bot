'use strict';

module.exports = function(err, req, res) {
    if (err) {
        res.status(500).send('ERROR: ' + err);
    } else {
        res.send('Success!');
    }
};
