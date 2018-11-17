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
		.findAll()
		.then(function(students) {
			res.send(students)
		})
});

app.post('/students', function(req, res) {
	Student
		.create(req.body)
		.then(
			function(student){
				res.send(student)
			},
			function(err) {
				var errors = err.errors.map(function(error) { return error.path + ' - ' + error.message });
				res.status(422);
				res.send({
					status: 422,
					err: errors
				});
			});
});

app.get('/students/:id', function(req, res) {
	Student
		.findOne({
			where: { id: req.params.id },
			include: [Course]
		})
		.then(function(student) {
			res.send(student);
		});
});

app.put('/students/:id', function(req, res) {
	Student
		.findOne({
			where: { id: req.params.id }
		})
		.then(function(student) {
			student
				.update(req.body)
				.then(
					function(updatedStudent){
						res.send(updatedStudent)
					},
					function(err) {
						var errors = err.errors.map(function(error) { return error.path + ' - ' + error.message });
						res.status(422);
						res.send({
							status: 422,
							err: errors
						});
				});
		});
});

app.delete('/students/:id', function(req, res) {
	Student
		.findOne({
			where: { id: req.params.id }
		})
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
		.findAll()
		.then(function(courses) {
			res.send(courses)
		})
});

app.post('/courses', function(req, res) {
		console.log(req.body)
	Course
		.create(req.body)
		.then(
			function(course){
				res.send(course)
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

app.get('/courses/:id', function(req, res) {
	Course
		.findOne({
			where: { id: req.params.id },
			include: [Student, Campus]
		})
		.then(function(course) {
			res.send(course);
		});
});

app.put('/courses/:id', function(req, res) {
	Course
		.findOne({
			where: { id: req.params.id }
		})
		.then(function(course) {
			course
				.update(req.body.params)
				.then(
					function(updatedCourse) {
						res.send(updatedCourse);
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
});

app.delete('/courses/:id', function(req, res) {
	Course
		.findOne({
			where: { id: req.params.id }
		})
		.then(function(course) {
			course
				.destroy()
				.then(function() {
					res.send(course);
				});
		});
});

app.post('/courses/:id/add_student', function(req, res) {
	Course
		.findOne({
			where: { id: req.params.id }
		})
		.then(function(course) {
			Student
				.findOne(req.body.student_id)
				.then(function(student) {
					course
						.addStudent(student)
						.then(function(updatedCourse) {
							res.send(updatedCourse);
						});
				})
		});
});

app.delete('/courses/:id/remove_student', function(req, res) {
	Course
		.findOne({
			where: { id: req.params.id }
		})
		.then(function(course) {
			Student
				.findOne(req.body.student_id)
				.then(function(student) {
					course
						.removeStudent(student)
						.then(function(updatedCourse) {
							res.send(updatedCourse);
						});
				})
		});
});

// Campuses
app.get('/campuses', function(req, res) {
	Campus
		.findAll()
		.then(function(campuses) {
			res.send(campuses);
		});
});

app.post('/campuses', function(req, res) {
	Campus
		.create(req.body)
		.then(
			function(campus){
				res.send(campus)
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

app.get('/campuses/:id', function(req, res) {
	Campus
		.findOne({
			where: { id: req.params.id },
			include: [Course]
		})
		.then(function(campus) {
			res.send(campus);
		});
});

app.get('/big_courses', function(req, res) {
	Course
	  .big()
	  .then(function(courses) {
	  	res.send(courses);
	  });
});

// Export app as module
module.exports = app;