var application_root = __dirname,
    express          = require('express'),
    bodyParser       = require('body-parser'),
    path             = require('path'),
    logger           = require('morgan'),
    models           = require('./models'),
    Human            = models.humans,
    House            = models.houses,
    Weapon					 = models.weapons;

var app = express();

// Server Configuration
app.use(logger('dev'));
app.use( bodyParser() );
app.use( express.static( path.join( application_root, 'public' )));
app.use( express.static( path.join( application_root, 'browser' )));

// Routes

app.get('/houses', function(req, res) {
	House
		.findAll()
		.then(function(houses) {
			res.send(houses);
		});
});

app.get('/houses/:id', function(req, res) {
	House
		.findOne({
			where: { id: req.params.id},
			include: Human
		})
		.then(function(house) {
			res.send(house);
		});
});

app.post('/houses', function(req, res) {
	House
		.create(req.body)
		.then(function(newHouse) {
			res.send(newHouse);
		});
});

app.put('/houses/:id', function(req, res) {
	House
		.findOne({
			where: { id: req.params.id },
			include: Human
		})
		.then(function(house) {
			house
				.update(req.body)
				.then(function(updatedHouse) {
					res.send(updatedHouse)
				})
		});
});

app.delete('/houses/:id', function(req, res) {
	House
		.findOne(req.params.id)
		.then(function(house) {
			house
				.destroy()
				.then(function() {
					res.send(house);
				});
		});
});

app.get('/humans', function(req, res) {
	Human
		.findAll()
		.then(function(humans) {
			res.send(humans);
		});
});

app.get('/humans/:id', function(req, res) {
	Human
		.findOne({
			where: { id: req.params.id },
			include: Weapon
		})
		.then(function(human) {
			res.send(human);
		});
});

app.post('/houses/:id/humans', function(req, res) {
	House
		.findOne(req.params.id)
		.then(function(house){
			Human
				.create(req.body)
				.then(function(newHuman) {
					house
						.addHuman(newHuman)
						.then(function(human) {
							res.send(human)
						});
				});
		});
});

app.put('/humans/:id', function(req, res) {
	Human
		.findOne({
			where: { id: req.params.id },
			include: Weapon
		})
		.then(function(human) {
			human
				.update(req.body)
				.then(function(updatedHuman) {
					res.send(updatedHuman)
				})
		});
});

app.delete('/humans/:id', function(req, res) {
	Human
		.findOne(req.params.id)
		.then(function(human) {
			human
				.destroy()
				.then(function() {
					res.send(human);
				});
		});
});

app.post('/humans/:id/weapons', function(req, res){
	Human
		.findOne(req.params.id)
		.then(function(human) {
			Weapon
				.create(req.body)
				.then(function(weapon) {
					human
						.addWeapon(weapon)
						.then(function(weapon) {
							res.send(weapon);
						});
				});
		});
});

// Export app as module
module.exports = app;