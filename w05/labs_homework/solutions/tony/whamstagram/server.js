var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var models = require("./models");
var Photo = models.photo;

app.use(express.static(__dirname + '/public'));

app.use( bodyParser() );


var server = app.listen(3000, function () {
  console.log("This app is running at http://localhost:3000");
})

// Photos Index
app.get("/photos", function (req, res) {
  Photo
  	.findAll()
  	.then(function (result) {
    	res.send(result)
  })
});

// Photo Show
app.get("/photos/:id", function (req, res) {
	var id = req.params.id;
  Photo
  	.find(id)
  	.then(function (result) {
    	res.send(result)
  })
});

// Photos Create
app.post("/photos", function(req, res) {
	var formParams = req.body;
	console.log('WHAMMING WHAMstaGram!');
	console.log(formParams);

	Photo
		.create(formParams)
		.then(function(photo) {
			res.send(photo);
		})
});

// Photo Update
app.put("/photos/:id", function(req, res) {
	var formParams  = req.body;
	console.log(formParams);
	console.log('UPDATING that WHAM!')
	var photoId  = req.params.id;

	Photo
		.findOne(photoId)
		.then(function(photo) {
			photo
				.update(formParams)
				.then(function(updatedPhoto) {
					res.send( updatedPhoto );
				});
		});
});

// Photo Destroy
app.delete('/photos/:id', function(req, res) {
	var photoId = req.params.id;

	Photo
		.findOne(photoId)
		.then(function(photo) {
			photo.destroy()
				.then(function() {
				res.send(photo);
			});
		});
});
