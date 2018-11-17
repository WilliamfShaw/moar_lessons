var express = require('express');
var app = express();
var models = require("./models");
var Pokemon = models.pokemon;

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("This app is running at http://localhost:%s", host, port);
})

app.get("/", function(req, res) {
})

app.get("/pokemons", function (req, res) {
  Pokemon.findAll({order: 'id ASC'}).then(function (result) {
    res.send(result)
  })
});


app.get("/pokemons/searchByName", function (req, res) {
  Pokemon.findOne({where: {name: req.query.name}}).then(function (result) {
    res.send(result)
  })
})

app.get("/pokemons/searchByType", function (req, res) {
  Pokemon.findAll({where: {classification: req.query.classification}}).then(function (result) {
    res.send(result)
  })
})

app.get("/pokemons/random", function (req, res) {
  Pokemon.findOne({where: {id: req.query.id}}).then(function (result) {
    res.send(result)
  })
})

app.get("/pokemons/:id", function (req, res) {
  Pokemon.findOne(req.params.id).then(function (result) {
    res.send(result)
  })
})