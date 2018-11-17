$(function() {
	console.log('chillin in the park with $$$.');

	// Question 8 - Add h1 tag to the Body
	var addHeader = function() {
		var parkHeader = $('<h1>').text('$uite Park Time');
		$('body').append(parkHeader);
	};

	addHeader();
	
	// Question 9 - Edit Text of List Item Three

	var editListItemThree = function() {
		$('li').eq(4)
					 .text('JimBob');
	};

	editListItemFour();

	// Question 10 - Click Event on Duck

	$('#duck').on('click', function(){
		$(this).attr('id', 'weaselpecker');
	})

});