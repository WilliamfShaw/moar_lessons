var expect = require("chai").expect;
var Car = require('../car')

describe('Car', function() {
  var make, 
      model, 
      year, 
      hp, 
      topSpeed;

  beforeEach("make car", function() {
    make = "Ford";
    model = "Mustang";
    year = 1967;
    hp = 314;
    topSpeed = 144;
    whip = new Car(make, model, year, hp, topSpeed)
  });

  // Attributes
  it('should have a make', function() {
    expect(whip.make).to.equal(make)
  });

  it('should have a model', function() {
     expect(whip.model).to.equal(model)
  });

  it('should have a year', function() {
     expect(whip.year).to.equal(year)
  });

  it('should have a hp', function() {
     expect(whip.hp).to.equal(hp)
  });

  it('should have a top speed', function() {
     expect(whip.topSpeed).to.equal(topSpeed)
  });


  // Behaviors
  it('should have return the full name', function() {
     expect(whip.description()).to.equal("1967 Ford Mustang")
  });

  it('should have return the top speed', function() {
     expect(whip.getTopSpeed()).to.equal("1967 Ford Mustang tops out at " + whip.topSpeed + " mph")
  });

  it('should have return hp', function() {
     expect(whip.getHp()).to.equal("1967 Ford Mustang has " + whip.hp + " HP")
  });

  it('should have return true if car is older than 1980', function() {
     expect(whip.isClassic()).to.be.true
  });

  it('should have return true if the car has a top speed less than 145', function() {
     expect(whip.isStreetLegal()).to.be.true
  });
});