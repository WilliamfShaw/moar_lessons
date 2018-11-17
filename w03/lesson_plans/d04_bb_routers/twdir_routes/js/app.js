$(function() {

	App.router = new TweedRouter();
	Backbone.history.start();

	$('#new-tweed-form').on('click', '#submit', App.createTweed);
});

var App = {
	createTweed: function() {
		var data = {
			content: $('[name="content"]').val(),
			author: $('[name="author"]').val()
		};

		var newTweed = App.collection.create(data);
		$('input').val('');
	}
}
