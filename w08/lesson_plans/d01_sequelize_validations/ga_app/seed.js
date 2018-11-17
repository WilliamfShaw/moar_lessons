var models           = require('./models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;
var campus_names = ['GA Wunderbar', 'GA West - NYC', 'GA East - NYC', 'GA - The Bay', 'GA - Santa Monica'];
var cam_capacity = [50, 500, 200, 200, 300];
var city = ['Berlin', 'New York City', 'New York City', 'San Francisco', 'Los Angeles'];
var president = ['Bruce Willis', 'John McClane', 'John McClane', 'Korben Dallas', 'Butch Coolidge'];
var active = [false, true, true, true, true];

for (var i = 0; i < 5; i++) {
	Campus.create({
		name: campus_names[i],
		address: 'Some Where Over the Tech Rainbow',
		capacity: cam_capacity[i],
		city: city[i],
		president: president[i],
		active: active[i]
	});
}

var courses = [];

Course.create({
	name: 'WDI McClane',
	length: 12,
	category: 'Immersive',
	start_date: '2/9/2015',
	end_date: '5/15/2015',
	capacity: 30
}).then(function(course) {
		Student.create({
		first_name:'McK',
		last_name:'Scott',
		age: 51,
		email: 'mck@scott.com',
	}).then(function(student) { course.addStudent(student) });
	Student.create({
		first_name:'Hari',
		last_name:'Mohanraj',
		age: 50,
		email: 'hari@mohanraj.com'
	}).then(function(student) { course.addStudent(student) });
	Student.create({
		first_name:'Tony',
		last_name:'DeFreitas',
		age: 52,
		email: 'tony@defreitas.com'
	}).then(function(student) { course.addStudent(student) });
	Student.create({
		first_name:'Will',
		last_name:'Shaw',
		age: 53,
		email: 'will@shaw.com'
	}).then(function(student) {
		course.addStudent(course);
		course.set({campus_id: 2})
		course.save();
	});

})

Course.create({
	name: 'BEWD',
	length: 8,
	category: 'Part-Time',
	start_date: '3/9/2015',
	end_date: '5/9/2015',
	capacity: 20
}).then(function(course) {
	course.save({campus_id: 2});
})
Course.create({
	name: 'UXDI Bubbles',
	length: 10,
	category: 'Immersive',
	start_date: '2/9/2015',
	end_date: '5/1/2015',
	capacity: 50
}).then(function(course) {
	course.save({campus_id: 2});
});


// Student.create({
// 	first_name:'McK',
// 	last_name:'Scott',
// 	age: 51,
// 	email: 'mck@scott.com'
// });
// Student.create({
// 	first_name:'Hari',
// 	last_name:'Mohanraj',
// 	age: 50,
// 	email: 'hari@mohanraj.com'
// });
// Student.create({
// 	first_name:'Tony',
// 	last_name:'DeFreitas',
// 	age: 52,
// 	email: 'tony@defreitas.com'
// });
// Student.create({
// 	first_name:'Will',
// 	last_name:'Shaw',
// 	age: 53,
// 	email: 'will@shaw.com'
// });

