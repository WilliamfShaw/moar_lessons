var app = require('express')(),
		bodyParser = require('body-parser'),
		logger		 = require('morgan');


app.use(bodyParser());
app.use(logger('dev'));

app.get('/home', function(req, res) {
	res.send('Hello World');
});

app.get('/an_array', function(req, res) {
	res.send([1,2,3])
});

app.get('/an_object', function(req, res) {
	res.send({name: 'hello'});
});

module.exports = app;