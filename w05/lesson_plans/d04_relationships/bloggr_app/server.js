// Suite Libs
var express = require('express');
var logger  = require('morgan');
var bodyParser = require('body-parser');
var models  = require('./models');

// Models
var User = models.users;
var Post = models.posts;

// Express application
var app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

// Routes

// ----------------------------
//     USERS
// ----------------------------

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
    .findOne({
      where: {id: req.params.id},
      include: [Post]
    })
    .then(function(user) {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ error: 404, msg: 'User not found' });
      }
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

// ----------------------------
//     POSTS
// ----------------------------

// Index
app.get('/posts', function(req, res) {
  Post
    .findAll()
    .then(function(posts) {
      res.send(posts);
    });
});

// Show
app.get('/posts/:id', function(req, res) {
  Post
    .findOne(req.params.id)
    .then(function(post) {
      if (post) {
        res.send(post);
      } else {
        res.status(404).send({ error: 404, msg: 'Post not found' });
      }
    });
});

// Create

app.post('/users/:id/posts', function(req, res) {
  var userId = req.params.id;
  var postParams = req.body;

  User
    .findOne(userId)
    .then(function(user) {
      if (user) {
        user
          .addPost(postParams)
          .then(function(newPost) {
            res.send(newPost);
          });
      } else {
        res.status(404).send({ error: 404, msg: 'User not found' });
      }
    });

});

// Update

app.put('/posts/:id', function(req, res) {
  var postParams = req.body;
  var postId = req.params.id;

  Post
    .findOne(postId)
    .then(function(post) {
      if (post) {
        post
          .update(postParams)
          .then(function(updatedPost) {
            res.send(updatedPost);
          });
      } else {
        res.status(404).send({ error: 404, msg: 'Post not found' });
      }
    });
});

// Destroy

app.delete('/posts/:id', function(req, res) {
  var postId = req.params.id;

  Post
    .findOne(postId)
    .then(function(post) {
      if (post) {
        post
          .destroy()
          .then(function() {
            res.send(post);
          });
      } else {
        res.status(404).send({ error: 404, msg: 'Post not found' });
      }
    });
});

app.get('/test', function(req, res) {
  User
    .findOne(1)
    .then(function(user) {
      user
        .getPosts()
        .then(function(posts) {
          res.send(posts);
        })
    });
});


// Server
app.listen(3000, function() {
  console.log('Server running on port 3000...');
});
