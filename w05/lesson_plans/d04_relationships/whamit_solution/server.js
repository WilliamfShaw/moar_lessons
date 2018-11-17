var express    = require('express');
var bodyParser = require('body-parser');
var models     = require(__dirname  + '/models');
var logger     = require('morgan');

var Channel    = models.channels;
var Comment    = models.comments;

app = express();

app.use(bodyParser());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/channels', function(req, res) {
  Channel
    .findAll({ include: Comment })
    .then(function(channels) {
      res.send(channels);
    });
});

app.get('/channels/:id', function(req, res) {
  Channel
    .findOne({
      where: { id: req.params.id },
      include: Comment
    })
    .then(function(channel) {
      res.send(channel);
    });
});

app.post('/channels', function(req, res) {
  Channel
    .create(req.body)
    .then(function(newChannel) {
      res.send(newChannel);
    });
});

app.put('/channels/:id', function(req, res) {
  Channel
    .findOne(req.params.id)
    .then(function(channel) {
      channel
        .update(req.body)
        .then(function(updatedChannel) {
          res.send(updatedChannel);
        });
    });
});

app.delete('/channels/:id', function(req, res) {
  Channel
    .findOne(req.params.id)
    .then(function(channel) {
      channel
        .destroy()
        .then(function(destroyedChannel) {
          res.send(destroyedChannel);
        });
    });
});

app.get('/comments', function(req, res) {
  Comment
    .findAll()
    .then(function(comments) {
      res.send(comments);
    });
});

app.get('/comments/:id', function(req, res) {
  Comment
    .findOne(req.params.id)
    .then(function(comment) {
      res.send(comment);
    });
});

app.post('/channels/:id/comments', function(req, res) {
  // Comment
  //   .create({
  //     content: req.body.content,
  //     author: req.body.author,
  //     channel_id: req.params.id
  //   })
  //   .then(function(newComment) {
  //     res.send(newComment);
  //   });

  var channelId = req.params.id;
  var commentParams = req.body;

  Channel
    .findOne(channelId)
    .then(function(channel) {
      Comment
        .create(commentParams)
        .then(function(newComment) {
          channel.addComment(newComment);
          res.send(newComment);
        })
    });
});

app.put('/comments/:id', function(req, res) {
  Comment
    .findOne(req.params.id)
    .then(function(comment) {
      comment
        .update(req.body)
        .then(function(updatedComment) {
          res.send(updatedComment);
        });
    });
});

app.delete('/comments/:id', function(req, res) {
  Comment
    .findOne(req.params.id)
    .then(function(comment) {
      comment
        .destroy()
        .then(function(destroyedComment) {
          res.send(destroyedComment);
        });
    });
});


app.listen(3000, function() {
  console.log('Server running on 3000...');
});
