console.log('yo!')

var sumOfSquares = function(number) {
	var sum = 0;
	while(number) {
		sum += Math.pow(number, 2);
		number--;
	}
	return sum;
}

var squareOfSums = function(number) {
	var sum = 0;
	while(number) {
		sum += number;
		number--;
	}
	return Math.pow(sum, 2)
}