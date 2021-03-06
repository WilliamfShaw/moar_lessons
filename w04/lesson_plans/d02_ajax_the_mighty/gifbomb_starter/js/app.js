$(function() {
	gifTemplate = Handlebars.compile($('#gif-template').html());

	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});

	$('#search-box').on('click', '#random', randomGifSearch);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);

	$('#gif-container').on('click', 'button', toggleUrl);
});

// Set on initialize
var gifTemplate;

// Toggle between url for animated and static gif images
var toggleUrl = function() { $(this).siblings('img').attr('src', $(this).attr('data-value')); };

// Error message to be logged to the console
// in the event of an AJAX error ( 404 )
var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};

// Performs an AJAX request to the giphy api
// endpoint: http://api.giphy.com/v1/gifs/random
// api_key: dc6zaTOxFJmzC&
// Request will return an object with a single gif and metadata
var getRandomGif = function() {};

// Renders and displays the random gif returned from the API call
var showRandomGif = function(gif) {};

// Kitten Bomb
// AND
// Puppy Bomb
// Performs an AJAX request to the giphy api
// should ask for 10 gifs
// should render and display them using the gifTemplate
var kittenBomb = function() {};
var puppyBomb = function() {};

// Performs an AJAX request to the giphy api
// with user supplied search params
var	search = function() {};

// Should render and display the results
// returned from the AJAX request to giphy
var showSearchResults = function(results) {};