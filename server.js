var express = require('express');
var app = express();
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var orm = require('orm');
var dbconnection = require('./config/db');

var db = orm.connect(dbconnection);

app.set('view engine', 'html');
app.set('view options', {layout: false});
app.engine('html', hbs.__express);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

db.load("./models", function(err) {
	var models = db.models;
	require("./routes")(app, models);
});



app.listen(3030);