var express          = require('express'),
    models           = require('../models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;

var courseRouter = express.Router();

courseRouter.get('/', function(req, res) {
  Course
    .findAll({ include: Student })
    .then(function(courses) {
      res.send(courses);
    });
});

courseRouter.get('/:id', function(req, res) {
  Course
    .findOne({
      where: { id: req.params.id },
      include: Student
    })
    .then(function(course) {
      res.send(course);
    });
});

courseRouter.post('/', function(req, res) {
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

courseRouter.put('/:id', function(req, res) {
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

courseRouter.delete('/:id', function(req, res) {
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

module.exports = courseRouter;
