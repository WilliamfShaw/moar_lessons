var express    = require('express');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var models     = require('./models');

var app = express();

var Venue = models.venues;
var Event = models.events;
var Artist = models.artists;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.send('hello');
});

app.get('/venues', function(req, res) {
  Venue
    .findAll()
    .then(function(venues) {
      res.send(venues);
    });
});

app.post('/venues', function(req, res) {
  Venue
    .create(req.body)
    .then(
      function(venue) {
        res.send(venue);
      },
      function(err) {
        var errors = err.errors.map(function(error) { return error.path + ' - ' + error.message });
        res.status(422);
        res.send({
          status: 422,
          err: errors
        });
      }
    );
});

app.get('/events', function(req, res) {
  Event
    .findAll()
    .then(function(events) {
      res.send(events);
    });
});

app.post('/events', function(req, res) {
  Event
    .create(req.body)
    .then(
      function(event) {
        res.send(event);
      },
      function(err) {
        var errors = err.errors.map(function(error) { return error.path + ' - ' + error.message });
        res.status(422);
        res.send({
          status: 422,
          err: errors
        });
      }
    );
});

app.get('/artists', function(req, res) {
  Artist
    .findAll()
    .then(function(artists) {
      res.send(artists);
    });
});

app.post('/artists', function(req, res) {
  Artist
    .create(req.body)
    .then(
      function(artist) {
        res.send(artist);
      },
      function(err) {
        var errors = err.errors.map(function(error) { return error.path + ' - ' + error.message });
        res.status(422);
        res.send({
          status: 422,
          err: errors
        });
      }
    );
});

app.listen(3000, function() {
  console.log('Server listening on 3000...');
});
