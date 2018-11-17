var express          = require('express'),
    models           = require('../models'),
    Artist  				 = models.artists,
    Event            = models.events,
    Venue            = models.venues;

var artistRouter = express.Router();

artistRouter.get('/find_by_genre', function(req, res) {
  var genres = req.query.genres.split(',');
  console.log(genres);
  Artist
    .findByGenre(genres)
    .then(function(artists) {
      res.send(artists);
    });
});

artistRouter.get('/', function(req, res) {
  Artist
    .findAll()
    .then(function(artists) {
      res.send(artists);
    });
});

artistRouter.post('/', function(req, res) {
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

module.exports = artistRouter;
