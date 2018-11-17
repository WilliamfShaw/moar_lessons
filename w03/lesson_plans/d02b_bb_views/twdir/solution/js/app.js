$(function() {
	$('#new-tweed-form').on('click', '#submit', App.createTweed);
	App.renderAllTweeds();

	testTweed = new TweedModel({ id: "272916ca-1192-7f01-dd43-87ba6acb8a91" });
	testTweed.fetch();
	view = new TweedView({ model: testTweed });
	view.render();

});

var App = {
	collection: new TweedsCollection(),
	createTweed: function() {
		var data = {
			content: $('[name="content"]').val(),
			author: $('[name="author"]').val()
		};

		var newTweed = App.collection.create(data);
		App.renderTweed(newTweed);
		$('input').val('');
	},
	renderTweed: function(model) {
		var tweedsContainer = $('#tweed-collection-view')
		var author = model.get('author');
		var content = model.get('content');
		var votes = model.get('votes');
		var iD = model.get('id');

		var newTweed = $('<div>').addClass('tweed')
														 .attr('id', iD);
		var tweedContent = $('<p>').text(content)
															 .addClass('content');
		var tweedAuthor =  $('<p>').text(author)
															 .addClass('author');
		var votes = $('<div>').addClass('vote')
													.append($('<span>').text(' - ').addClass('vote-button').attr('data-value', -1))
													.append($('<span>').text(votes).addClass('votes'))
													.append($('<span>').text(' + ').addClass('vote-button').attr('data-value', 1));

		var deleteSpan = $('<p>').text('delete')
														 .addClass('delete')
														 .attr('data-id', iD);

		newTweed.append(tweedContent)
						.append(tweedAuthor)
						.append(votes)
						.append(deleteSpan)
						.appendTo(tweedsContainer);

	},
	renderAllTweeds: function() {
		App.collection.fetch();
		App.collection.each(App.renderTweed);
	}
}
