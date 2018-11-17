var application_root = __dirname,
    express          = require('express'),
    path             = require('path'),
    logger           = require('morgan');

var app = express();

// Server Configuration
app.use(logger('dev'));
app.use( express.static( path.join( application_root, 'public' ) ) );
app.use( express.static( path.join( application_root, 'browser' ) ) );

// Routes

app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});