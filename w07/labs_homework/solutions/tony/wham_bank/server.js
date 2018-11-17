var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    User             = models.users,
    Account          = models.accounts,
    bcrypt					 = require('bcrypt'),
    session					 = require('express-session');

var app = express();

// Server Configuration
app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

app.use(session({
	secret: 'donttellnobody',
	saveUninitialized: false,
	resave: false
}));

// Routes

// Callback
var restrictAccess = function(req, res, next) {
  var sessionID = parseInt(req.session.currentUser);
  var reqID = parseInt(req.params.id);
  sessionID === reqID ? next() : res.status(401).send({ err: 401, msg: 'YOU SHALL NOT PASS!'});
};

// LOGIN and LOGOUT

app.post('/sessions', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	User
		.findOne({
			where: { username: username }
		})
		.then(function(user) {
			if (user) {
				bcrypt.compare(password, user.password_digest, function(err, result) {
					if (result) {
            req.session.currentUser = user.id;
            res.send(user);
          } else {
            res.status(400);
            res.send({ err: 400, msg: 'Incorrect password' });
          }
				});
			} else {
				res.status(400);
				res.send({ err: 400, message: ''});
			}
		});
});

app.delete('/sessions', function(req, res) {
  delete req.session.currentUser;
  res.send({ msg: 'Successfully logged out' });
});

app.get('/current_user', function(req, res) {
	if (req.session.currentUser) res.send(req.session.currentUser)
});

// User Routes

app.post('/users', function(req, res) {
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		User
			.create({
				username: req.body.username,
				password_digest: hash
			})
			.then(function(user) {
				var savings = Account.create({ account_type: 'savings', user_id: user.id })
				var checking = Account.create({ account_type: 'checking', user_id: user.id })
				user.addAccount(savings);
				user.addAccount(checking);
				res.send(user)
			});
	});
});

app.get('/users/:id', restrictAccess, function(req, res) {
	User
		.findOne({
			where: { id: req.params.id },
			include: [Account]
		})
		.then(function(user) {
			res.send(user);
		});
});

app.put('/users/:id', restrictAccess, function(req, res) {
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		User
			.findOne({
				where: { id: req.params.id },
				include: [Account]
			})
			.then(function(user) {
				user
					.update({
						username: req.body.username,
						password_digest: hash
					})
					.then(function(updatedUser) {
						res.send(updatedUser);
					});
			})
	});
});

app.delete('/users/:id', restrictAccess, function(req, res) {
	User
		.findOne(req.params.id)
		.then(function(user) {
			user
				.destroy()
				.then(function() {
					delete req.session.currentUser;
					res.send(user);
				});
		});
});

app.put('/users/:id/accounts/:account_id', restrictAccess, function(req, res) {
	Account
		.findOne(req.params.account_id)
		.then(function(account) {
			account
				.update({ balance: req.body.balance })
				.then(function(updatedAccount) {
					res.send(updatedAccount);
				});
		});
});

app.delete('/users/:id/accounts/:account_id', restrictAccess, function(req, res) {
	Account
		.findOne(req.params.account_id)
		.then(function(account) {
			account
				.destroy()
				.then(function() {
					res.send(account);
				});
		});
});

// Export app as module
module.exports = app;