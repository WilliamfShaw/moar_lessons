// Square digit chains
// Problem 92
// A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.

// For example,

// 44 → 32 → 13 → 10 → 1 → 1
// 85 → 89 → 145 → 42 → 20 → 4 → 16 → 37 → 58 → 89

// Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.

// How many starting numbers below ten million will arrive at 89?

var oneArray = [['1']];
var eightyNineArray = [['8','9']];

var number = 1;
var ssa = function (number) {
	var total = 0
	var numberToArray = number.toString()
		.split('');
	for (var i = numberToArray.length; i > 0; i--) {
		total += Math.pow(numberToArray[i - 1],2);
	};
	return total;
};

while (number < 10000) {
	var testNumber = number;
	console.log('the number is ' + number);
	while (oneArray.indexOf(testNumber) === -1 &&
		eightyNineArray.indexOf(testNumber) === -1) 
	{
		nextNumber = ssa(testNumber);
		console.log(nextNumber);
		if (oneArray.indexOf(nextNumber) !== -1) {
			oneArray.push(testNumber)
		} else if (eightyNineArray.indexOf(nextNumber) !== -1) {
			eightyNineArray.push(testNumber)
		} else {
			testNumber = nextNumber
		}
	}
	number++
	console.log(eightyNineArray);
	console.log(oneArray);
}

console.log(eightyNineArray.length)
console.log(oneArray.length)

// console.log(ssa(123));