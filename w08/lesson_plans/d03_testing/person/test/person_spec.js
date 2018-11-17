var expect = require('chai').expect;
var Person = require('../person.js');

describe("Person", function() {
	var firstName,
			lastName,
			age,
			height,
			person;

	beforeEach('make person', function() {
		firstName = 'McKenneth';
		lastName = 'Scott III';
		age = 55;
		height = 73;
		person = new Person(firstName, lastName, age, height);
	});

	// Attributes

	it('should have a first name', function() {
		// var firstName = 'McKenneth';
		// var person = new Person(firstName);
		expect(person.firstName).to.equal(firstName);
	});

	it('should have a last name', function() {
		// var firstName = 'McKenneth';
		// var lastName = 'Scott III';
		// var person = new Person(firstName, lastName);

		expect(person.lastName).to.equal(lastName);
	});

	it('should have an age', function() {
		// var firstName = 'McKenneth';
		// var lastName = 'Scott III';
		// var age = 55;
		// var person = new Person(firstName, lastName, age);

		expect(person.age).to.equal(age);
	});

	it('should have a height', function() {
		// var firstName = 'McKenneth';
		// var lastName = 'Scott III';
		// var age = 55;
		// var height = 73;
		// var person = new Person(firstName, lastName, age, height);

		expect(person.height).to.equal(height);
	});

	// Behaviors

	describe('fullName', function() {
		it('should contain the first name of the person', function() {
			expect(person.fullName()).to.include(firstName);
		});

		it('should contain the last name of the person', function() {
			expect(person.fullName()).to.include(lastName);
		});

		it('should return the full name of the person', function() {
			var fullName = [firstName, lastName].join(' ');
			expect(person.fullName()).to.equal(fullName);
		});
	});

	describe('introduce', function() {
		it('should contain the full name of the person', function() {
			expect(person.introduce()).to.include(person.fullName());
		});

		it('should contain the age of the person', function() {
			expect(person.introduce()).to.include(person.age);
		});

		it('should return a string with with an introduction', function() {
			var statement = ["Hi, I am", person.fullName(), "age:", person.age ].join(' ');
			expect(person.introduce()).to.equal(statement)
		});
	});

	describe('grow', function() {
		it('should change the height of the person', function() {
			var heightBefore = person.height;
			person.grow();
			expect(person.height).to.not.equal(heightBefore);
		});

		it('should increment the height by 1', function() {
			var heightBefore = person.height;
			person.grow();
			expect(person.height).to.equal(heightBefore + 1);
		});

		it('should not increment the height past 90', function() {
			var personTwo = new Person(firstName, lastName, age, 90);
			personTwo.grow();
			expect(personTwo.height).to.equal(90);
		});
	});

	describe('haveBirthday', function() {
		it('should change the age of the person', function() {
			var ageBefore = person.age;
			person.haveBirthday();
			expect(person.age).to.not.equal(ageBefore);
		});

		it('should increment the age by 1', function() {
			var ageBefore = person.age;
			person.haveBirthday();
			expect(person.age).to.equal(ageBefore + 1);
		});

		it('should not increment the age past 120', function() {
			var personTwo = new Person(firstName, lastName, 120, height);
			personTwo.haveBirthday();
			expect(personTwo.age).to.equal(120);
		});
	});

	describe('getHeight', function() {
		it('should return the height in feet', function() {
			expect(person.getHeight()).to.include('6 feet');
		});

		it('should include the number of inches', function() {
			expect(person.getHeight()).to.include('1 inch(es)');
		});
	});
});