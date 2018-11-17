var express          = require('express'),
    models           = require('../models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;

var campusRouter = express.Router();

campusRouter.get('/', function(req, res) {
	Campus
		.findAll({ include: Course })
		.then(function(campuses) {
			res.send(campuses);
		});
});

campusRouter.get('/:id', function(req, res) {
  Campus
    .findOne({
      where: { id: req.params.id },
      include: Course
    })
    .then(function(campus) {
      res.send(campus);
    });
});

campusRouter.post('/', function(req, res) {
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

campusRouter.put('/:id', function(req, res) {
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

campusRouter.delete('/:id', function(req, res) {
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

module.exports = campusRouter;
