var application_root = __dirname,
		express          = require('express'),
		bodyParser       = require('body-parser'),
		logger           = require('morgan'),
		models           = require(application_root + '/models/'),
		Item             = models.items;

var app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));


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

// Create

app.post('/items', function(req, res) {
  var itemParams = req.body;
  Item
  	.create(itemParams)
    .then(function(newItem) {
      res.send(newItem);
    });
});

// Update

app.put('/items/:id', function(req, res) {
  var itemParams = req.body;
  var itemId = req.params.id;

  Item
  	.findOne(itemId)
    .then(function(item) {
      item
        .update(itemParams)
        .then(function(updatedItem) {
          res.send(updatedItem);
        });
    });
});

// Destroy

app.delete('/items/:id', function(req, res) {
  var itemId = req.params.id;

  Item
    .findOne(itemId)
    .then(function(item) {
      item
        .destroy()
        .then(function() {
          res.send(item);
        });
    });
});


app.listen(3000, function() {
	console.log('Running on localhost:3000');
});