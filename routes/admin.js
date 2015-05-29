var express = require('express');

module.exports = (function() {
    'use strict';
    var router = express.Router();

    router.get('/', function(req, res) {
        res.send('ADMIN DASHBOARD');
    });

    router.get('/posts', function (req, res) {
        res.send('ADMIN POSTS');
    });

    return router;
})();