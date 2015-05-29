module.exports = function(app, models) {
	app.get('/', function(req, res) {
		res.render('web/index', {
			title: "Home",
			layout: 'web/layout'
		});
	});
	app.get('/about', function(req, res) {
		res.render('web/about', {
			title: "About",
			layout: 'web/layout'
		});
	});

	app.get('/blog', function(req, res) {
		models.article.find({}, function(err, posts) {
			res.render('web/blog', {
				title: "My Blog",
				layout: 'web/layout',
				posts: posts
			});
		});
	});

	app.get('/blog/:id', function(req, res) {
		models.article.find({id: req.params.id}, function(err, post) {
			res.render('web/blog-post', {
				layout: 'web/layout',
				title: post[0].title,
				post: post[0]
			});
		});
	});
};