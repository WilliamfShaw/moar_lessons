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

var gifTemplate;

var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};

var toggleUrl = function() {
	var button = $(this);
	var url = button.attr('data-value');
	button.siblings('img').attr('src', url);
};

var randomGifSearch = function() {
	$.ajax({
			url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC',
			method: 'GET'
		})
	 .done(showRandomGif)
	 .fail(errorMessage);
};

var showRandomGif = function(gif) {
	var data = {
		gif_animated: gif.data.image_url,
		gif_static: gif.data.fixed_width_small_still_url
	};
	$('#gif-container').html(gifTemplate(data));
};

// Part Deux

var kittenBomb = function() {
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=kittens&api_key=dc6zaTOxFJmzC&limit=10';

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	var results = response.data;

	 	var renderedResults = results.map(function(gif) {
	 		var data = {
				gif_static: gif.images.fixed_width_still.url,
				gif_animated: gif.images.original.url
			};
			return gifTemplate(data);
	 	});

		$('#gif-container').html(renderedResults.join(''));
	});
};

var puppyBomb = function() {
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=puppies&api_key=dc6zaTOxFJmzC&limit=10';

	$.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	var results = response.data;

	 	var renderedResults = results.map(function(gif) {
	 		var data = {
				gif_static: gif.images.fixed_width_still.url,
				gif_animated: gif.images.fixed_width.url
			};
			return gifTemplate(data);
	 	});

		$('#gif-container').html(renderedResults.join(''));
	});
};

// Part Three

var	search = function(event) {
	var searchTerm = [
		'http://api.giphy.com/v1/gifs/search?q=',
		encodeURI($('[name="search"]').val()),
		'&api_key=dc6zaTOxFJmzC'
	].join('');

	console.log(searchTerm);

	// Make a request to a remote server
	// Search Endpoint for giphy
	$.ajax({ url: searchTerm, method: 'GET' })
	// What should happen when the response comes back from the AJAX request
	 .done(showSearchResults)
	// What should happen if the request fails
	 .fail(errorMessage);

	$('input').val('');
};

var showSearchResults = function(results) {
	var gifResults = results.data;
	var renderedGifs = gifResults.map(function(gif) {
		var data = {
			gif_static: gif.images.fixed_width_still.url,
			gif_animated: gif.images.fixed_width.url
		};
		return gifTemplate(data);
	});

	$('#gif-container').html(renderedGifs.join(''));
};