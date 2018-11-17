var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Venue            = models.venues,
    Show						 = models.shows,
    Artist					 = models.artists;

var app = express();

// Server Configuration
app.use(logger('dev'));
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

// Routes

// ----------------------------
//     Venues
// ----------------------------

// Index
app.get('/venues', function(req, res) {
  Venue
    .findAll()
    .then(function(venues) {
      res.send(venues);
    });
});

// Show
app.get('/venues/:id', function(req, res) {
  Venue
    .findOne({
      where: {id: req.params.id},
      include: [Show]
    })
    .then(function(venue) {
      res.send(venue);
    });
});

// Create

app.post('/venues', function(req, res) {
  var venueParams = req.body;
  Venue
    .create(venueParams)
    .then(function(newVenue) {
      res.send(newVenue);
    });
});

// Update
app.put('/venues/:id', function(req, res) {
  var userParams = req.body;
  var userId = req.params.id;

  User
    .findOne(userId)
    .then(function(user) {
      user
        .update(userParams)
        .then(function(updatedUser) {
          res.send(updatedUser);
        });
    });
});

// Destroy
app.delete('/venues/:id', function(req, res) {
  var venueId = req.params.id;

  Venue
    .findOne(venueId)
    .then(function(venue) {
      venue
        .destroy()
        .then(function() {
          res.send(venue);
        });
    });
});

// ----------------------------
//     Shows
// ----------------------------

// Index
app.get('/shows', function(req, res) {
  Show
    .findAll({ include: [Artist] })
    .then(function(shows) {
      res.send(shows);
    });
});

// Show
app.get('/shows/:id', function(req, res) {
  Show
    .findOne(req.params.id)
    .then(function(show) {
      res.send(show);
    });
});

// Create
app.post('/venues/:id/shows', function(req, res) {
  var venueId = req.params.id;
  var showParams = req.body;

  Venue
    .findOne()
    .then(function(venue) {
      Show
        .create(showParams)
        .then(function(newShow) {
          venue.addShow(newShow)
          res.send(newShow);
        });
    });

});

// Update
app.put('/shows/:id', function(req, res) {
  var showParams = req.body;
  var showId = req.params.id;

  Show
    .findOne(showId)
    .then(function(show) {
      show
        .update(showParams)
        .then(function(updatedShow) {
          res.send(updatedShow);
        });
    });
});

// Destroy
app.delete('/shows/:id', function(req, res) {
  var showId = req.params.id;

  Show
    .findOne(showId)
    .then(function(show) {
      show
        .destroy()
        .then(function() {
          res.send(show);
        });
    });
});

app.put('/shows/:id/add_artist', function(req, res) {
  var postId = req.params.id;
  var artistId = req.body.artist_id;

  Post
    .findOne(postId, { include: [Artist] })
    .then(function(post) {
      Artist
        .findOne(artistId)
        .then(function(artist) {
          post
            .addArtist(artist)
            .then(function(info) {
              res.send(info);
            });
        });
    });

});

app.put('/shows/:id/remove_artist', function(req, res) {
  var postId = req.params.id;
  var artistId = req.body.artist_id;

  Post
    .findOne(postId, { include: [Artist] })
    .then(function(post) {
      Artist
        .findOne(artistId)
        .then(function(artist) {
          post
            .removeArtist(artist)
            .then(function(info) {
              res.send(info);
            });
        });
    });
});

// ----------------------------
//     Artists
// ----------------------------

// Index
app.get('/artists', function(req, res) {
  Artist
    .findAll({ include: [Show] })
    .then(function(artists) {
      res.send(artists);
    });
});

// Show
app.get('/artists/:id', function(req, res) {
  artist
    .findOne(req.params.id)
    .then(function(artist) {
      res.send(artist);
    });
});

// Create
app.post('/artists', function(req, res) {
  var artistParams = req.body;

  Artist
    .create(artistParams)
    .then(function(newArtist) {
      res.send(newArtist);
    });
});

// Update
app.put('/artists/:id', function(req, res) {
  var artistParams = req.body;
  var artistId = req.params.id;

  Artist
    .findOne(artistId)
    .then(function(artist) {
      artist
        .update(artistParams)
        .then(function(updatedArtist) {
          res.send(updatedArtist);
        });
    });
});

// Destroy
app.delete('/artists/:id', function(req, res) {
  var artistId = req.params.id;

  Artist
    .findOne(artistId)
    .then(function(artist) {
      artist
        .destroy()
        .then(function() {
          res.send(artist);
        });
    });
});

// Export app as module
module.exports = app;