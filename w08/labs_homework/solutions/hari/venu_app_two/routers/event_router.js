var express          = require('express'),
    models           = require('../models'),
    Artist  				 = models.artists,
    Event            = models.events,
    Venue            = models.venues;

var eventRouter = express.Router();

eventRouter.get('/', function(req, res) {
  Event
    .findAll()
    .then(function(events) {
      res.send(events);
    });
});

eventRouter.post('/', function(req, res) {
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

eventRouter.get('/upcoming', function(req, res) {
  Event
    .findUpcomingEvents()
    .then(function(events) {
      res.send(events);
    });
});

eventRouter.get('/:id/category', function(req, res) {
  Event
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(event) {
      res.send( event.category() );
    });
});

eventRouter.get('/:id/is_upcoming', function(req, res) {
  Event
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(event) {
      res.send( event.isUpcoming() );
    });
});

eventRouter.get('/:id/info', function(req, res) {
  Event
    .findOne({
      where: { id: req.params.id },
    })
    .then(function(event) {
      res.send({
        is_upcoming: event.isUpcoming(),
        category: event.category()
      });
    });
});

module.exports = eventRouter;
