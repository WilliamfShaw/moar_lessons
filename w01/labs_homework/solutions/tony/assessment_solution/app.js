
//Problem 1

// How do I get the string "dog" using the variable pets

var pets = ["iguana", "hamster", "dog"]

pets[2]

// Problem 2

// How do I get the string "snails" using the variable coolThings

var coolThings = { tony: "t-shirts",
                mck:  "nike boots",
                sarah: "snails"}

coolThings.sarah

// Problem 3

// How do I get the string "Clinton" using the variable knowledge

var knowledge = {presidents: ["Clinton",
                             "Roosevelt",
                             "Bush1",
                             "Lincoln"],
             states:   ["Nebraska",
                         "Hawaii"]}

knowledge.presidents[0]

// Problem 4

// Using the variable userName, create a variable greeting that holds a greeting message. So for example.

var userName = "Big Steve";
// # after your code, the variable greeting should equal 
var greeting = userName + ", welcome to the party.";


// Problem 5

// Using the variables bankBalance and itemPrice, create an if-statement that logs "you can buy it" to the console if bankBalance is greater than or equals to itemPrice.

var bankBalance = 200
var itemPrice = 30

if (bankBalance >= itemPrice) {
	console.log('You can buy it!')
}

// Problem 6

// Using the variables numberOfPeople and numberOfSpots in car create if-else if-else-statement that logs one of the following things to the console.

// "there are more people than cars" if numberOfPeople is greater than numberOfCars
// "there are fewer people than cars" if numberOfPeople is less than numberOfCars
// "there are the same number of cars as people" if numberOfPeople equals numberOfCars
numberOfPeople = 3
numberOfCars = 10
if (numberOfPeople > numberOfCars) {
	console.log("there are more people than cars");
} else if (numberOfPeople < numberOfCars) {
	console.log("there are more cars than people");
} else {
	console.log("there are the same number of cars as people");
}

// Problem 7

// Write a function called addsSeven that takes one parameter called aNumber. Your method will return the number passed in but incremented by 7. Here are some sample calls of the method you are to write.

var addsSeven = function(number) {
	return number + 7;
}

addsSeven(4)
// returns 11
addsSeven(10)
// returns 17
// Problem 8

// Write a function called greetsTwo that takes two arguments called name1 and name2 which will both be strings. Your method should return a string saying hello to both names. Here are some sample calls of the method you are to write.

var greetsTwo = function(name1, name2) {
	console.log("Hello " + name1 + ". Hello " + name2 + ".");
}

greetsTwo("Sarah", "Mike");
// returns "Hello Sarah. Hello Mike."
greetsTwo("Hans", "The Dude");
// returns "Hello Hans. Hello The Dude."
// Problem 9

// Write a function called greaterThan that takes two arguments number1 and number2. The return value will depend on a condition.

// return number1 if it is greater number2
// return number2 if it is greater number1
// return "the same!" of number1 and number2 are equal
var greaterThan = function(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;
	} else {
		return "the same!";
	}
};

// Problem 10

// Write a function called capitalizer that takes a single argument, a firstName, and capitalizes it.

var capitalizer = function(firstName) {
	var nameArr = firstName.split('');
	nameArr[0] = nameArr[0].toUpperCase();
	var newName = nameArr.join('');
	return newName;
}
// capitalizer(theRock) = "DWAYNE THE ROCK JOHNSON";

// Problem 12

var bike = {
	name: 'schwinn',
	color: 'blue',
	paintRed: function() {
		this.color = 'red';
	}
};

// Problem 13
// a)
// Write a function called dogFactory.  dogFactory should take two arguments, a dog name (string) and a breed (string).  This function should return dog objects with the following properties and behavior:

// Properties
// name: the dog's name
// breed: the dog's breed

// Behavior
// arfer(): a function that logs 'arf' to the console.
// b)
// create a dog object and use it's show how all of log each  property and call it's behavior.

var dogFactory = function(dogName, dogBreed) {
	var dog = {
		name: dogName,
		breed: dogBreed,
		arfer: function() {
			console.log('arf');
		}
	};
	return dog
}

var odie = dogFactory('Odie', "Mutt");

console.log(odie.name);
console.log(odie.breed);
odie.arfer();

// Problem 12

// Write a function called saysWill.  saysWill takes two arguments, an input and and a function.  saysWill should return the result of calling that function argument with the input argument, but with " says Will."

var saysWill = function(callback, input) {
	return callback(input) + " says Will.";
};

saysWill(capitalizer, "dwayne");
// returns "Dwayne The Rock Johnson says Will."
