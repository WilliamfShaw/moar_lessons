var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;
    campusRouter     = require('./routers/campus_router.js'),
    courseRouter     = require('./routers/course_router.js'),
    studentRouter    = require('./routers/student_router.js');

var app = express();

// Server Configuration
app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/campuses', campusRouter);


// Export app as module
module.exports = app;
