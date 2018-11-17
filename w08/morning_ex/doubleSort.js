var doubleSort = function(array) {
	var words = array.filter(function(element) {
		return isNaN(parseInt(element));
	});
	var numbers = array.filter(function(element) {
		return !(isNaN(parseInt(element)));
	});

	var sortedWords = words.sort();
	var orderedNumbers = numbers.sort(function(a, b) {
  	return (a - b);
	});

	return array.map(function(element) {
		return isNaN(parseInt(element)) ? sortedWords.shift() : orderedNumbers.shift() 
	});
};


var baking = ["sugar", "butter", "egg"];
// => ["butter", "egg", "sugar"]

var numbers = ["12", "10", "3", "4", "1"];
//=> ["1", "3", "4", "10", "12"]

var bakingNumbers = ["16", "8", "4", "salt", "baking", "soda"];
//=> ["4", "8", "16", "baking", "salt", "soda"]

var bananaNumbers = ["2", "4", "banana", "1", "vanilla", "flour"];
//=> ["1", "2", "banana", "4", "flour", "vanilla"]

var allTheStuff = ["123","12","capp","apple","13","zogg","doge","5","5","5","poop","1","0","poop"];
// => ["0","1","apple","capp","5","doge","poop","5","5","12","poop","13","123","zogg"]

doubleSort(baking);
doubleSort(numbers);
doubleSort(bakingNumbers);
doubleSort(bananaNumbers);
console.log(doubleSort(allTheStuff));


