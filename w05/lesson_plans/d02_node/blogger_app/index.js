// Suite Libs
var express = require('express');
var logger  = require('morgan');
var models  = require(__dirname + '/models');

// Models
var User = models.user;

// Express application
var app = express();

// Middleware
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/users', function(req, res) {
  User
    .findAll()
    .then(function(users) {
      res.send(users);
    });
});

app.get('/users/search', function(req, res) {
  User
    .findAll({ where: req.query })
    .then(function(users) {
      res.send(users);
    });
});

app.get('/users/:id', function(req, res) {
  User
    .find(req.params.id)
    .then(function(user) {
      res.send(user);
    });
});

// Server
app.listen(3000, function() {
  console.log('Server running on port 3000...');
});
