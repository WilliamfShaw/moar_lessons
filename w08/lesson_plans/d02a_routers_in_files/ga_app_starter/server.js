var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;

var app = express();

// Server Configuration
app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

// Routes

// Students

app.get('/students', function(req, res) {
  Student
    .findAll({ include: Course })
    .then(function(students) {
      res.send(students);
    });
});

app.get('/students/:id', function(req, res) {
  Student
    .findOne({
      where: { id: req.params.id },
      include: Course
    })
    .then(function(student) {
      res.send(student);
    });
});

app.post('/students', function(req, res) {
	Student
		.create(req.body)
		.then(function(student) {
			res.send(student);
		}, function(err) {
			var errors = err.errors.map(function(error) {
				return error.path + ' - ' + error.message;
			});
			res
				.status(422)
				.send(errors);
		});
});

app.put('/students/:id', function(req, res) {
  Student
    .findOne(req.params.id)
    .then(function(student) {
      student
    		.update(req.body)
    		.then(function(updatedStudent) {
    			res.send(updatedStudent);
    		}, function(err) {
    			var errors = err.errors.map(function(error) {
    				return error.path + ' - ' + error.message;
    			});
    			res
    				.status(422)
    				.send(errors);
    		});
    });
});

app.delete('/students/:id', function(req, res) {
  Student
    .findOne(req.params.id)
    .then(function(student) {
      student
        .destroy()
        .then(function() {
          res.send(student);
        });
    });
});

// Courses

app.get('/courses', function(req, res) {
  Course
    .findAll({ include: Student })
    .then(function(courses) {
      res.send(courses);
    });
});

app.get('/courses/:id', function(req, res) {
  Course
    .findOne({
      where: { id: req.params.id },
      include: Student
    })
    .then(function(course) {
      res.send(course);
    });
});

app.post('/courses', function(req, res) {
	Course
		.create(req.body)
		.then(function(course) {
			res.send(course);
		}, function(err) {
			var errors = err.errors.map(function(error) {
				return error.path + ' - ' + error.message;
			});
			res
				.status(422)
				.send(errors);
		});
});

app.put('/courses/:id', function(req, res) {
  Course
    .findOne(req.params.id)
    .then(function(course) {
      course
    		.update(req.body)
    		.then(function(updatedCourse) {
    			res.send(updatedCourse);
    		}, function(err) {
    			var errors = err.errors.map(function(error) {
    				return error.path + ' - ' + error.message;
    			});
    			res
    				.status(422)
    				.send(errors);
    		});
    });
});

app.delete('/courses/:id', function(req, res) {
  Course
    .findOne(req.params.id)
    .then(function(course) {
      course
        .destroy()
        .then(function() {
          res.send(course);
        });
    });
});

// Campus

app.get('/campuses', function(req, res) {
	Campus
		.findAll({ include: Course })
		.then(function(campuses) {
			res.send(campuses);
		});
});

app.get('/campuses/:id', function(req, res) {
  Campus
    .findOne({
      where: { id: req.params.id },
      include: Course
    })
    .then(function(campus) {
      res.send(campus);
    });
});

app.post('/campuses', function(req, res) {
	Campus
		.create(req.body)
		.then(function(campus){
			res.send(campus);
		}, function(err){
			res
				.status(422)
				.send(err);
		});
});

app.put('/campuses/:id', function(req, res) {
  Campus
    .findOne(req.params.id)
    .then(function(campus) {
      campus
    		.update(req.body)
    		.then(function(updatedCampus) {
    			res.send(updatedCampus);
    		}, function(err) {
    			var errors = err.errors.map(function(error) {
    				return error.path + ' - ' + error.message;
    			});
    			res
    				.status(422)
    				.send(errors);
    		});
    });
});

app.delete('/campuses/:id', function(req, res) {
  Campus
    .findOne(req.params.id)
    .then(function(campus) {
      campus
        .destroy()
        .then(function() {
          res.send(campus);
        });
    });
});

// Export app as module
module.exports = app;
