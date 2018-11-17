var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bcrypt = require('bcrypt');
var session = require('express-session');
var models = require('./models');

var User = models.users;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'graemelloyd',
  saveUninitialized: false,
  resave: false
}));

app.get('/users', function(req, res) {
  User
    .findAll()
    .then(function(users) {
      res.send(users);
    });
});

app.post('/users', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    User
      .create({
        username: req.body.username,
        password_digest: hash,
        poops: 0
      })
      .then(function(user) {
        res.send(user);
      });
  });
});

app.post('/sessions', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User
    .findOne({
      where: { username: req.body.username }
    })
    .then(function(user) {
      if (user) {
        bcrypt.compare(password, user.password_digest, function(err, result) {
          if (result) {
            req.session.currentUser = user.id;
            res.send(user);
          } else {
            res.status(400);
            res.send({
              err: 400,
              msg: 'Incorrect password'
            });
          }
        });
      } else {
        res.status(400);
        res.send({
          err: 400,
          msg: 'Username not found'
        });
      }
    });
});

app.delete('/sessions', function(req, res) {
  req.session.currentUser = null;
  res.send({ msg: 'You are log out.' });
});

app.get('/current_user', function(req, res) {
  if (req.session.currentUser) {
    User
      .findOne(req.session.currentUser)
      .then(function(user) {
        res.send(user)
      });
  } else {
    res.send(null);
  }
});

app.put('/users/log_poop', function(req, res) {
  if (req.session.currentUser) {
    User
    	.findOne(req.session.currentUser)
    	.then(function(user) {
    		console.log(user.poops);
    		console.log(user);
    		user
    			.update({
    				poops: user.poops + 1
    			})
    			.then(function(updatedUser) {
						res.send(updatedUser)
					})
    	})
  } else {
  	res.status(401);
    res.send({
      err: 401,
      msg: 'You must log in to log Poops!'
    });
  }
});


app.use(express.static('./public'));

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});