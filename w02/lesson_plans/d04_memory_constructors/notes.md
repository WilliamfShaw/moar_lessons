Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Constructors and Prototypes

## Learning Objectives

- Define a constructor function in JavaScript
- Use a constructor to create multiple objects
- Use a constructor's prototype to store common functionality

## Outline

# Before

- Made multiple object literals, each with their own attributes and behaviors

### What was wrong with this?

- MOIST...ew

# Then

## Factories

- we made a function, that would accept inputs for different attributes
- we created object literals with those attributes, and the shared functions
- then we returned the object from the function

```
var minionFactory = function(name, eyes) {
	var minion = {
		name: name,
		eyes: eyes,
		color: 'Yellow',
		mutate: function() {
			this.color = 'Purple';
			return this.name + " is now " + this.color;
		},
		revert: function() {
			this.color = 'Yellow';
			return this.name + " is now " + this.color;
		}
	};
	return minion;
};

var minion1 = minionFactory('McK', 4);
var minion2 = minionFactory('Hari', 3);

minion1.eyes
minion2.mutate()
```

### What was wrong with this?

- it was hacky!
- We said there was a better way of doing this but didn't want to introduce it just yet.

# Now

## Constructors

- A constructor is a function in javascript that is used to crate multiple objects that possess unique attributes, but with the same behaviors
- a pure Object Factory

**I Do**

```
var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	};
};
```

```
var mck = new Person('McKenneth', 'Scott III', 9001);
mck.fullName();
mck.age;

var hari = new Person('Hariharan', 'Mohanraj', 50);
hari.fullName();
hari.age;
```

#### Conventions
- capitalize the function (will work without it but CONVENTION)
- to make an object we use a keyword `new`

**You do** 10 minutes

Using the minion factory as an example, define a constructor for minions
Create 3 minions and make sure that they have different attributes and mutate/revert behaviors

**REVIEW 10 minutes SEND ME YOUR MINION**

# BREAK

We have a problem. When we run our constructor function, we are creating new instances of the objects. Each object gets its own set of attributes, and its own set of behaviors. This means every time we make an object, it will create a new copy of every behavior function we define.

If we make 10 minions, we make ten minion objects, and ten revert functions, and ten mutate functions.

What if we make 10000 minions. That's 10000 copies of the same function stored in memory. This makes me anxious.

### How can we fix this?

## Prototypes

#### First we do

```

var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

Person.prototype.fullName = function() {
	return this.firstName + ' ' + this.lastName;
};

Person.prototype.introduce = function() {
	return 'Hi my name is ' + this.fullName() + '!';
};

```

#### Now let's discuss

**DRAW ON BOARD**

- the prototype gives us the ability to store common attributes and behaviors for all objects created from a constructor.
- It stores one copy, that all objects can use.

**String.prototype.split**

### How does it work?

- when an object calls a method, first it checks itself and sees if that behavior has been defined for it. If it does not find it, it will look at its prototype to see if it has been defined there.

- When an object is made, a connection is made to the prototype

**You do** 5 minutes

refactor your minion constructor to use a prototype
- add a speak function that returns the minions name, eyes and color
- add a gobbledeegook function that returns a string of nonsensical gibberish

Check that your minions are still functional.

# BREAK

## Benefits

- define a function once, that multiple objects have access to
- can add functionality at any point in your program and be assured that any previously created objects will have that functionality

**You do** 20 minutes

Make a `Car` constructor and a `lot` object literal.

- `Car` has make, model, rimDiameter
	- info method -> return the make, model and rim diameter
	- upgradeRims -> rimDiameter + 10
- `lot` is an object literal, with an array of cars
	- behavior: addCar -> accept a car object and add
	- behavior: listAllCars -> iterate over the array of cars logging the response of calling the car objects info method

** GET STUDENT TO COME UP AND TYPE RESPONSES**

**DOES THIS MEAN WE SHOULD CHANGE AND ADD PROPERTIES TO JAVASCRIPT STRING, NUMBER, ARRAY AND OBJECT CLASSES** NO!

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

