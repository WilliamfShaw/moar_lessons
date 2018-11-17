$(function() {
	gifTemplate = Handlebars.compile($('#gif-template').html());

	$('#search-box').on('click', '#search', search);
	$('#search-box').on('keypress', function(event) {
		if (event.keyCode === 13) { search(); }
	});
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#puppies', puppyBomb);
	$('#gif-container').on('click', 'button', toggleUrl);
});

var gifTemplate;

var errorMessage = function(error) { console.log('There was a problem:', error.statusText); };
var toggleUrl = function() { $(this).siblings('img').attr('src', $(this).data('value') ); };

var randomGifSearch = function() {};

var showRandomGif = function(gif) {
	var data = {
		gif_animated: gif.data.image_url,
		gif_static: gif.data.fixed_width_small_still_url
	};
	$('#gif-container').html(gifTemplate(data));
};


// Part Deux

var kittenBomb = function() {};
var puppyBomb = function() {};
var	search = function() {};

var showSearchResults = function(results) {
	var renderedGifs = results.map(function(gif) {
		var data = {
			gif_static: gif.images.fixed_width_still.url,
			gif_animated: gif.images.fixed_width.url
		};
		return gifTemplate(data);
	});

	$('#gif-container').html(renderedGifs.join(''));
};