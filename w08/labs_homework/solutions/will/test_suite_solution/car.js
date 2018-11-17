var Car = function(make, model, year, hp, topSpeed) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.hp = hp;
  this.topSpeed = topSpeed;
}

Car.prototype.description = function() {
  return [this.year, this.make, this.model].join(" ")
};

Car.prototype.getTopSpeed = function(  ) {
  return [this.description(), "tops out at", this.topSpeed, "mph"].join(" ")
};

Car.prototype.getHp = function() {
  return [this.description(), "has", this.hp, "HP"].join(" ")
};

Car.prototype.isClassic = function() {
  return (this.year < 1980);
};

Car.prototype.isStreetLegal = function() {
  return (this.topSpeed <= 145);
};

var whip = new Car("Ford", "Mustang", 1978, 340, 150)

console.log(whip.description())
console.log(whip.getTopSpeed())
console.log(whip.getHp());
console.log(whip.isClassic());
console.log(whip.isStreetLegal())



module.exports = Car;


