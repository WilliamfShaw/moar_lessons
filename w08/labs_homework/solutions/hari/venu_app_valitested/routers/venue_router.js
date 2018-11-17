var express          = require('express'),
    models           = require('../models'),
    Artist  				 = models.artists,
    Event            = models.events,
    Venue            = models.venues;

var venueRouter = express.Router();

venueRouter.get('/', function(req, res) {
  Venue
    .findAll()
    .then(function(venues) {
      res.send(venues);
    });
});

venueRouter.post('/', function(req, res) {
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

venueRouter.get('/:id/info', function(req, res) {
  Venue
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(venue) {
      res.send( venue.info() );
    });
});

venueRouter.get('/large', function(req, res) {
  Venue
    .findLargeVenues()
    .then(function(venues) {
      res.send(venues);
    });
});

module.exports = venueRouter;
