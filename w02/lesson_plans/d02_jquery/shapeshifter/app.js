$(function() {
	console.log('Loaded, bro');
});

var makeCircles = function() {
	// select the div that will hold all circles
	var container = $('.circle-container');
	// find the siblings of that div (the input tags)
	var inputs = container.siblings();
	// Select the first input and second input's values and store them.
	var numToMake = inputs.eq(0).val();
	var color = inputs.eq(1).val();

	// if no color is provided set color to firebrick
	if (color === '') {
		color = 'firebrick';
	}

	// start a loop that will count up to the number the user has input for
	// the number of circles to make
	for (var i = 0; i < numToMake; i++) {
		// On each iteration create a new div and add the class of circle
		// if the color selected is random -> get a random color
		// else set the background of that div to be the user's given color
		// Append the circle to the circle container
		var newCircle = $('<div>').addClass('circle');

		if (color === 'random'){
			newCircle.css('background-color', randomColor())
		} else {
			newCircle.css('background-color', color);
		}
		newCircle.appendTo(container);
	}

	// set the inputs back to an empty string
	inputs.val('');
};

var makeSquares = function() {
	var container = $('.square-container');
	var inputs = container.siblings();
	var numToMake = inputs.eq(0).val();
	var color = inputs.eq(1).val();

	if (color === '') {
		color = 'darkslategrey';
	}

	for (var i = 0; i < numToMake; i++) {
		var newSquare = $('<div>').addClass('square');

		if (color === 'random'){
			newSquare.css('background-color', randomColor())
		} else {
			newSquare.css('background-color', color);
		}
		newSquare.appendTo(container);
	}
	inputs.val('');
};

var makeThings = function() {
	var container = $('.things-container');
	var inputs = container.siblings();
	var numToMake = inputs.eq(0).val();
	var color = inputs.eq(1).val();

	if (color === '') {
		color = 'sheen';
	}

	var imgSrc = 'url(http://place' + color + '.com/100/100)';
	for (var i = 0; i < numToMake; i++) {
		var newThing = $('<div>').addClass('circle')
															.css('background', imgSrc);
		newThing.appendTo(container);
	}
	inputs.val('');
};

// generate a random color by:
// storing three random numbers between 0 and 255
// joining the values with a comma
// then return a string that can be used to set the color:
// output => rgb(124,142,123)
var randomColor = function() {
	var rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
	return 'rgb(' + rgb.join() + ')';
};

// take the provided shape container
// build a selector string to match the container
// .[ circle | square | things ]-container
// then once the element is selected, empty it of all HTML
var clearShapes = function(which) {
	$('.' + which + '-container').empty();
};