module.exports = function(app, models) {
	app.get('/', function(req, res) {
		models.article.find({}, function(err, posts) {
			res.render('web/index', {
				title: "My Blog",
				layout: 'web/layout',
				posts: posts
			});
		});

	});
};