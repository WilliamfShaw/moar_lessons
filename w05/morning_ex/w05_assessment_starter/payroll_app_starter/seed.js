var models = require("./models");
var Employee = models.employees;

var seedArr = [
  {
    name: 'JimBob',
    position: 'Traveling Secretary',
    salary: 40000
  },
  {
    name: 'Ajax',
    position: 'courier',
    salary: 60000
  },
  {
    name: 'Morgan',
    position: 'logger',
    salary: 167000
  },
  {
    name: 'ACIDman',
    position: 'Postgrester General',
    salary: 99999
  }
]

var seedDatabase = function () {
  seedArr.forEach( function(seed) {
    Employee.create({
      name: seed.name,
      position: seed.position,
      salary: seed.salary
    })
  });
}

seedDatabase();