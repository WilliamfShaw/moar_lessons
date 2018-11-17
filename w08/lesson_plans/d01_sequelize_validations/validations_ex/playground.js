var User = require('./models').users

// User.create().then(success, err)

User
	.create({
		name: 'smaug roller',
		email: 'as.c',
		photo_url: 'http:/gip.com',
		age: 160,
		state: 'NYS',
		birthdate: 'May 15, 1890',
		hometown: 'Mars 2112',
		favorite_food: ''
	})
	.then(
		function(user) {
			console.log('hi', user);
		},
		function(err) {
			console.log('Errors:');
			console.log(err.message);
		});
