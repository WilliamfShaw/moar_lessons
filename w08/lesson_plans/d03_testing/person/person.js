var Person = function(firstName, lastName, age, height) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.height = height;
};

Person.prototype.fullName = function() {
	return [this.firstName, this.lastName].join(' ');
};

Person.prototype.introduce = function() {
	return "Hi, I am " + this.fullName() + " age: " + this.age;
};

Person.prototype.grow = function() {
	if (this.height < 90) this.height++;
};

Person.prototype.haveBirthday = function() {
	if (this.age < 120) this.age++;
};

Person.prototype.getHeight = function() {
	var feet = this.height / 12;
	var inches = this.height % 12;

	return Math.floor(feet) + ' feet ' + Math.floor(inches) + ' inch(es)';
};

module.exports = Person;