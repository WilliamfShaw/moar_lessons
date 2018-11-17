var calculator = {

	add: function(numOne, numTwo) {
		firstNum = numOne ? numOne : 0;
		secondNum = numTwo ? numTwo : 0;
		return firstNum + secondNum;
	},

	subtract: function(numOne, numTwo) {
		firstNum = numOne ? numOne : 0;
		secondNum = numTwo ? numTwo : 0;
		return firstNum - secondNum;
	},

	multiply: function(numOne, numTwo) {
		if (!numOne || !numTwo) return 0;
		return numOne * numTwo;
	},

	divide: function(numerator, denominator) {
		if (denominator === 0) return 0;
		return numerator / denominator;
	},

	factorial: function(num) {
		if ( num === 0 ) return 1;
		var result = 1;
		for (var i = num; i > 1; i--) {
			result *= i;
		}
		return result;
	},

	abs: function(num) {
		if ( num * -1 < 0 ) { return num };
		if ( num * -1 > 0 ) { return num * -1}
	}
};

module.exports = calculator