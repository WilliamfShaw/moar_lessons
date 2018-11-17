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
      res.send(post);
    });
});

// Create
app.post('/users/:id/posts', function(req, res) {
  var userId = req.params.id;
  var postParams = req.body;

  User
    .findOne(userId)
    .then(function(user) {
      Post
        .create(postParams)
        .then(function(newPost) {
          user.addPost(newPost)
          res.send(newPost);
        });
    });

});

// Update
app.put('/posts/:id', function(req, res) {
  var postParams = req.body;
  var postId = req.params.id;

  Post
    .findOne(postId)
    .then(function(post) {
      post
        .update(postParams)
        .then(function(updatedPost) {
          res.send(updatedPost);
        });
    });
});

// Destroy
app.delete('/posts/:id', function(req, res) {
  var postId = req.params.id;

  Post
    .findOne(postId)
    .then(function(post) {
      post
        .destroy()
        .then(function() {
          res.send(post);
        });
    });
});

// ----------------------------
//     TAGS
// ----------------------------

// Index
// app.get('/tags', function(req, res) {
//   Tag
//     .findAll({ include: [Post] })
//     .then(function(tags) {
//       res.send(tags);
//     });
// });
//
// // Show
// app.get('/tags/:id', function(req, res) {
//   Tag
//     .findOne(req.params.id)
//     .then(function(tag) {
//       res.send(tag);
//     });
// });
//
// // Create
// app.post('/tags', function(req, res) {
//   var tagParams = req.body;
//
//   Tag
//     .create(tagParams)
//     .then(function(newTag) {
//       res.send(newTag);
//     });
// });
//
// // Update
// app.put('/tags/:id', function(req, res) {
//   var tagParams = req.body;
//   var tagId = req.params.id;
//
//   Tag
//     .findOne(tagId)
//     .then(function(tag) {
//       tag
//         .update(tagParams)
//         .then(function(updatedTag) {
//           res.send(updatedTag);
//         });
//     });
// });
//
// // Destroy
// app.delete('/tags/:id', function(req, res) {
//   var tagId = req.params.id;
//
//   Tag
//     .findOne(tagId)
//     .then(function(tag) {
//       tag
//         .destroy()
//         .then(function() {
//           res.send(tag);
//         });
//     });
// });

// Server
app.listen(3000, function() {
  console.log('Server running on port 3000...');
});
