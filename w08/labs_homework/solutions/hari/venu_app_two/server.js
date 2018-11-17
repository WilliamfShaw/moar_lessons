var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    artistRouter     = require('./routers/artist_router.js'),
    eventRouter      = require('./routers/event_router.js'),
    venueRouter      = require('./routers/venue_router.js');

var app = express();

app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

app.use('/artists', artistRouter);
app.use('/events', eventRouter);
app.use('/venues', venueRouter);

app.listen(3000, function() {
  console.log('Server listening on 3000...');
});

module.exports = app;
