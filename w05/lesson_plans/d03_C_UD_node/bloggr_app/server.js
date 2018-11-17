// Suite Libs
var express = require('express');
var logger  = require('morgan');
var bodyParser = require('body-parser');
var models  = require('./models');

// Models
var User = models.user;

// Express application
var app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

// Routes

// Index
app.get('/users', function(req, res) {
  User
    .findAll()
    .then(function(users) {
      res.send(users);
    });
});

// Search
app.get('/users/search', function(req, res) {
  User
    .findAll({ where: req.query })
    .then(function(users) {
      res.send(users);
    });
});

// Show
app.get('/users/:id', function(req, res) {
  User
    .findOne(req.params.id)
    .then(function(user) {
      res.send(user);
    });
});

// Create

app.post('/users', function(req, res) {
  var userParams = req.body;
  User
    .create(userParams)
    .then(function(newUser) {
      res.send(newUser);
    });
});

// Update

app.put('/users/:id', function(req, res) {
  var userParams = req.body;
  var userId = req.params.id;

  User
    .findOne(userId)
    .then(function(user) {
      user
        .update(userParams)
        .then(function(updatedUser) {
          res.send(updatedUser);
        });
    });
});

// Destroy

app.delete('/users/:id', function(req, res) {
  var userId = req.params.id;

  User
    .findOne(userId)
    .then(function(user) {
      user
        .destroy()
        .then(function() {
          res.send(user);
        });
    });
});

// Server
app.listen(3000, function() {
  console.log('Server running on port 3000...');
});
