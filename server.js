var express			= require('express');
var hbs				= require('hbs');
var bodyParser		= require('body-parser')

var app	= express();

app.set('view engine', 'html');
app.set('view options', { layout: false });
app.engine('html', hbs.__express);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


var api = require('./routes/api');
var web = require('./routes/web');
var admin = require('./routes/admin');

app.use('/admin', admin);
app.use('/api', api);
app.use('/', web);


app.listen(3030);