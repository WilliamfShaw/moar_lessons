$(function() {
	console.log('Loaded, bro');
	$('#new-tweed-form').on('click', '#submit', createTweed);
	renderAllTweeds();
});

// 15 minutes
var createTweed = function() {
	var data = {
		content: $('[name="content"]').val(),
		author: $('[name="author"]').val()
	};

	var newTweed = new TweedModel(data);
	newTweed.save();
	renderTweed(newTweed);
};

// 30 minutes
var renderTweed = function(model) {
	var tweedsContainer = $('#tweed-collection-view')
	var author = model.get('author');
	var content = model.get('content');
	var votes = model.get('votes');

	var newTweed = $('<div>').addClass('tweed');
	var tweedContent = $('<p>').text(content)
														 .addClass('content');
	var tweedAuthor =  $('<p>').text(author)
														 .addClass('author');
	var votes = $('<div>').addClass('vote')
												.append($('<span>').text(' - ').addClass('vote-button'))
												.append($('<span>').text(votes).addClass('votes'))
												.append($('<span>').text(' + ').addClass('vote-button'));

	var deleteSpan = $('<p>').text('delete')
													 .addClass('delete');

	newTweed.append(tweedContent)
					.append(tweedAuthor)
					.append(votes)
					.append(deleteSpan)
					.appendTo(tweedsContainer);

};

// I DO
var renderAllTweeds = function() {
	var models = fetchAllModels();

	models.forEach(function(model) {
		renderTweed(model);
	});
};