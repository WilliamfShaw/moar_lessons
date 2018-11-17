var models           = require('./models'),
    Student					 = models.students,
    Course           = models.courses,
    Campus           = models.campuses;
var campus_names = ['GA Wunderbar', 'GA West - NYC'];
var cam_capacity = [50, 500];
var city = ['Berlin', 'New York City'];
var president = ['Bruce Willis', 'John McClane'];
var active = [false, true];
var campuses = [
  {
    name: campus_names[0],
    address: 'Some Where Over the Tech Rainbow',
    capacity: cam_capacity[0],
    city: city[0],
    president: president[0],
    active: active[0]
  },
  {
    name: campus_names[1],
    address: 'Some Where Over the Tech Rainbow',
    capacity: cam_capacity[1],
    city: city[1],
    president: president[1],
    active: active[1]
  }
];

var courses = [
  {
    name: 'WDI McClane',
    length: 12,
    category: 'Immersive',
    start_date: '2/9/2015',
    end_date: '5/15/2015',
    capacity: 30
  }
];

var students = [
  {
    first_name:'McK',
    last_name:'Scott',
    age: 51,
    email: 'mck@scott.com'
  },
  {
    first_name:'Hari',
    last_name:'Mohanraj',
    age: 50,
    email: 'hari@mohanraj.com'
  }
];

module.exports = function(done) {
  Campus.destroy({ truncate: true }).then(function() {
    Course.destroy({ truncate: true }).then(function() {
      Student.destroy({ truncate: true }).then(function() {
        Campus.bulkCreate(campuses).then(function() {
          Course.bulkCreate(courses).then(function() {
            Student.bulkCreate(students).then(function() {
              done();
            });
          });
        });
      })
    })
  })
};
