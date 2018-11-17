var application_root = __dirname;
var	express          = require('express');
var logger           = require('morgan');
var models           = require('./models/');
var Item             = models.items;

var app = express();

app.use(logger('dev'));

// Ask the server to send assets like html/js/css to the browser on this domain
app.use(express.static(__dirname + '/public'));

// Index
app.get('/items', function(req, res) {
  Item
  	.findAll()
    .then(function(items) {
      res.send(items);
    });
});

// Search
app.get('/items/search', function(req, res) {
  Item
  	.findAll({ where: req.query })
    .then(function(items) {
      res.send(items);
    });
});

// Show
app.get('/items/:id', function(req, res) {
  Item
  	.findOne(req.params.id)
    .then(function(item) {
      res.send(item);
    });
});










app.listen(3000, function() {
	console.log('Running on localhost:3000');
});