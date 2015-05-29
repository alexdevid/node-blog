var express = require('express');

module.exports = (function() {
	'use strict';
	var router = express.Router();

	router.get('/', function(req, res) {
		res.render('web/index', {title: "My Blog", layout: 'web/layout'});
	});

	router.get('/about', function(req, res) {
		res.render('web/about', { layout: 'web/layout' });
	});

	return router;
})();