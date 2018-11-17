var express    = require('express');
var bodyParser = require('body-parser');
var models     = require(__dirname  + '/models');
var logger     = require('morgan');

var Channel    = models.channels;

var app = express();

app.use(bodyParser());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/channels', function(req, res) {
  Channel
    .findAll()
    .then(function(channels) {
      res.send(channels);
    });
});

app.get('/channels/:id', function(req, res) {
  Channel
    .findOne(req.params.id)
    .then(function(channel) {
      res.send(channel);
    });
});

app.post('/channels', function(req, res) {
  Channel
    .create(req.body)
    .then(function(newChannel) {
      res.send(newChannel);
    });
});

app.put('/channels/:id', function(req, res) {
  Channel
    .findOne(req.params.id)
    .then(function(channel) {
      channel
        .update(req.body)
        .then(function(updatedChannel) {
          res.send(updatedChannel);
        });
    });
});

app.delete('/channels/:id', function(req, res) {
  Channel
    .findOne(req.params.id)
    .then(function(channel) {
      channel
        .destroy()
        .then(function(destroyedChannel) {
          res.send(destroyedChannel);
        });
    });
});

app.listen(3000, function() {
  console.log('Server running on 3000...');
});
