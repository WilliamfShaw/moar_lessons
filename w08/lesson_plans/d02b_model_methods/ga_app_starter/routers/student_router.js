var express          = require('express'),
    models           = require('../models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;

var studentRouter = express.Router();

studentRouter.get('/', function(req, res) {
  Student
    .findAll({ include: Course })
    .then(function(students) {
      res.send(students);
    });
});

studentRouter.get('/:id', function(req, res) {
  Student
    .findOne({
      where: { id: req.params.id },
      include: Course
    })
    .then(function(student) {
      res.send(student);
    });
});

studentRouter.post('/', function(req, res) {
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

studentRouter.put('/:id', function(req, res) {
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

studentRouter.delete('/:id', function(req, res) {
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

module.exports = studentRouter;
