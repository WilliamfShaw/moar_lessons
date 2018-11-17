var application_root = __dirname,
		express          = require('express'),
		bodyParser       = require('body-parser'),
		logger           = require('morgan'),
		path             = require('path'),
		models           = require(application_root + '/models/index'),
		User             = models.users,
		Blogpost         = models.blogposts,
		port             = 9888;

var app              = express();
// set up body parser for request body parameters
app.use( bodyParser() );
// set up serving of static assets from the server
app.use( express.static( path.join( application_root, 'public' ) ) );
// set up request/response console logging
app.use( logger('dev') );
// start server listening on specified port
app.listen(port);
console.log('Listening on port:', port);


// Root Route

app.get('/', function(req, res) {
	console.log('Incoming request to the root route');
	res.sendFile( 'index.html' );
});

// User Index

app.get('/users', function(req, res) {
	var users;

	User
		.findAll()
		.then(function(users) {
			res.send(users);
		});
});

// User Create

app.post('/users', function(req, res) {
	var params = req.body;
	console.log('Creating a new user with these params:');
	console.log(params);

	User
		.create(params)
		.then(function(user) {
			res.send(user);
		});
});

// User Search

app.get('/users/search', function(req, res) {
	var searchParams = { where: req.query };

	User
		.findAll(searchParams)
		.then(function(users) {
			if( users ) {
				res.send(users);
			} else {
				res.status(500).send({ error: 500, msg: 'No Users found'});
			}
		});
});

// User Show

app.get('/users/:id', function(req, res) {
	var userId = req.params.id;
	var query  = {
		where: { id: userId },
		include: [ { model: Blogpost } ]
	};

	User
		.findOne(query)
		.then(function(user) {
			if (user){
				res.send(user);
			} else {
				res.status(500).send({ error: 500, msg: 'User not found'});
			}
		});
});

// User Update

app.put('/users/:id', function(req, res) {
	var params  = req.body;
	var userId  = req.params.id;

	User
		.findOne(userId)
		.then(function(user) {
			user
				.update(params)
				.then(function(updatedUser) {
					res.send( updatedUser );
				});
		});
});

// User Destroy

app.delete('/users/:id', function(req, res) {
	var userId = req.params.id;

	User
		.findOne(userId)
		.then(function(user) {
			if(user) {
				user.destroy();
				res.send(user);
			} else {
				res.status(500).send({ error: 500, msg: 'User not found'});
			}
		});
});

// Post Index

app.get('/posts', function(req, res) {
	Blogpost
		.findAll()
		.then(function(posts) {
			res.send(posts);
		});
});

// Post Create

app.post('/users/:id/posts', function(req, res) {
	var userId     = req.params.id;
	var postParams = req.body;

	User
		.findOne(userId)
		.then(function(user) {
			if (user) {
				Blogpost
					.create(postParams)
					.then(function(post) {
						user.addBlogposts(post);
						res.send(post);
					});
			} else {
				res.status(500).send({ error: 500, msg: 'There was a problem creating your posts' });
			}
		});
});

// Post Show

app.get('/posts/:id', function(req, res) {
	var postId = req.params.id;
	var query  = { where: { id: postId } };

	Blogpost
		.findOne(query)
		.then(function(post) {
			res.send(post);
		});
});

// Post Update

app.put('/posts/:id', function(req, res) {
	var postId     = req.params.id;
	var postParams = req.body;

	Blogpost
		.findOne(postId)
		.then(function(post) {
			if (post) {
				post
					.update(postParams)
					then(function(updatedPost) {
						res.send( updatedPost );
					});
			} else {
				res.status(500).send({ error: 500, msg: 'There was a problem updating your post' });
			}
		});
});

// Post Destroy

app.delete('/posts/:id', function(req, res) {
	var postId = req.params.id;

	Blogpost
		.findOne(postId)
		.then(function(post) {
			if (post) {
				post.destroy();
				res.send(post);
			} else {
				res.status(500).send({ error: 500, msg: 'Post not found'});
			}
		});
});
