var orm = require('orm');

module.exports = function(db, cb) {
	db.define('article', {
		title: {type: 'text', required: true},
		description: {type: 'text', required: false},
		content: {type: 'text', required: true},
		status: {type: 'integer', required: true},
		image: {type: 'text', required: false},
		created_at: {type: 'date', required: true, time: true}
	},
	{
		hooks: {
			beforeValidation: function() {
				this.created_at = new Date();
			}
		},
		validations: {
			content: orm.enforce.ranges.length(1, 1024)
		},
		methods: {
			serialize: function() {
				return {
					title: this.title,
					content: this.body,
					created_at: this.created_at
				}
			}
		}
	});

	return cb();
};