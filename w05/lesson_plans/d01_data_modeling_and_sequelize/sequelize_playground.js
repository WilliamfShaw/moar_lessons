var User = require('./models/index').users;

User
	.findAll()
	.then(function(results) {
		results.forEach(function(model){
			console.log(model.toJSON());
		})
	});

//  Create a User

// User
// 	.create({
// 		name: 'Nate',
// 		age: 69,
// 		has_glasses: true
// 	})
// 	.then(function(user){
// 		console.log(user.toJSON())
// 	});

// //  Read a User

// // by ID

// User.findOne(1)
// 		.then(function(user) {
// 			if (user) {
// 				console.log(user.toJSON());
// 			} else {
// 				console.log('Sorry, could not find user');
// 			}
// 		});

// // by parameters

// User
// 	.create({ name: 'McK', age: 9001, has_glasses: true });

// User
// 	.findAll({
// 		where: {
// 			has_glasses: true
// 		}
// 	})
// 	.then(function(results) {
// 		if(results) {
// 			results.forEach(function(model){
// 				console.log(model.toJSON());
// 			})
// 		} else {
// 			console.log('No users found');
// 		}
// 	});

// User
// 	.findAll({
// 		where: {
// 			age: { gt: 69 },
// 			has_glasses: true
// 		}
// 	})
// 	.then(function(results) {
// 		if (results) {
// 			results.forEach(function(model){
// 				console.log(model.toJSON());
// 			})
// 		} else {
// 			console.log('No users found');
// 		}
// 	});

// //  Update a User

// var newParams = { age: 49, has_glasses: false };
// User
// 	.findOne(1)
// 	.then(function(user) {
// 		if (user) {
// 			user.update(newParams)
// 					.then(function(user) {
// 						console.log(user.toJSON());
// 					})
// 		} else {
// 			console.log('Problem updating user');
// 		}
// 	});


// //  Destroy a User

// User
// 	.findOne(2)
// 	.then(function(user){
// 		if (user) {
// 			user.destroy();
// 			console.log('user destroyed');
// 		} else {
// 			console.log('Problem destroying user');
// 		}
// 	});