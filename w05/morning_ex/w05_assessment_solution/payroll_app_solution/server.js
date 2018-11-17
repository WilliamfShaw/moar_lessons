var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models = require("./models");
var Employee = models.employees;
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.use( bodyParser() );


var server = app.listen(3000, function () {
  console.log("This app is running at http://localhost:3000");
});

app.get("/", function(req, res) {
});

// Employees Index
app.get("/employees", function (req, res) {
  Employee
  	.findAll()
  	.then(function (result) {
    	res.send(result)
  })
});

// Employee Show
app.get("/employees/:id", function (req, res) {
	var id = req.params.id;
  Employee
  	.find(id)
  	.then(function (result) {
    	res.send(result)
  })
});

// Employee Create
app.post("/employees", function(req, res) {
	var formParams = req.body;
	console.log('payrolll');
	console.log(formParams);

	Employee
		.create(formParams)
		.then(function(employee) {
			res.send(employee);
		})
});

// Employee Update
app.put("/employees/:id", function(req, res) {
	var formParams  = req.body;
	console.log(formParams);
	console.log('UPDATING that WHAM!')
	var employeeId  = req.params.id;

	Employee
		.findOne(employeeId)
		.then(function(employee) {
			employee
				.update(formParams)
				.then(function(updatedEmployee) {
					res.send( updatedEmployee );
				});
		});
});

// Employee Destroy
app.delete('/employees/:id', function(req, res) {
	var employeeId = req.params.id;

	Employee
		.findOne(employeeId)
		.then(function(employee) {
			employee.destroy()
				.then(function() {
				res.send(employee);
			});
		});
});
