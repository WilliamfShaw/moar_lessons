var application_root = __dirname;
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var morgan = require('morgan')
var models = require(application_root + "/models")
var Artist = models.artists;
var Painting = models.paintings;
var Museum = models.museums;

var server = app.listen(3000, function () {
  console.log("This app is running on Port 3000")
})

app.use(express.static('public'))
app.use(bodyParser());
app.use(morgan('dev'))


//Root
app.get("/", function (req, res) {
});

//Artists- INDEX
app.get("/artists", function (req, res) {
  Artist.findAll().then(function (result) {
    res.send(result)
  })
})

//Artist- SHOW
app.get("/artists/:id", function (req, res) {
  Artist.findOne({
    where: { id: req.params.id},
    include: [Painting]
  }).then(function (result) {
    res.send(result)
  })
})

//Artist - CREATE
app.post("/artists", function (req, res) {
  console.log(req.body);
  Artist.create(req.body).then(function (result) {
    console.log(result)
    res.send(result)

    })
})

//Artist - UPDATE
app.put("/artists/:id", function (req, res) {
  Artist.findOne(req.params.id).then(function (result) {
    result.update(req.body).then(function (updatedResult) {
      res.send(updatedResult)
    })
  })
})

//Artist - DELETE
app.delete("/artists/:id", function (req, res) {
  Artist.findOne(req.params.id).then(function (result) {
    result.destroy().then(function () {
      Painting.destroy({where: {artist_id: req.params.id}})
      res.send(result)
    })
  })
})

//Painting - INDEX
app.get("/paintings", function (req, res) {
  Painting.findAll().then(function (result) {
    res.send(result)
  })
})


//Painting - CREATE

app.post("/artists/:id/paintings", function (req, res) {
  Artist.findOne(req.params.id).then(function (artist) {
    Painting.create(req.body).then(function (painting) {
      console.log(painting, "ppopopooopppo")
      artist.addPainting(painting)
      res.send(painting)
    })
  })
})

//Painting - DELETE

app.delete("/paintings/:id", function (req, res) {
  Painting.findOne(req.params.id).then(function (result) {
    result.destroy();
    res.send(result)
  })
})





