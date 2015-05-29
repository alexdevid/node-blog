var express = require('express');

module.exports = (function() {
	'use strict';
	var api = express.Router();

	api.get('/users', function(req, res) {
		res.send('{name: "test"}');
	});

	return api;
})();