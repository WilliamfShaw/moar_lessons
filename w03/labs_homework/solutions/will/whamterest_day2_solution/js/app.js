$(function () {
	console.log("loaded bro");

	$('#new-post').on('click', App.createPost);
	$('#next').on('click', App.loadNext);
	$('#back').on('click', App.loadPrevious);

	App.start();
});


var App = {
	collection: new PostsCollection(),
	start: function() {
		App.collection.fetch();
		if (App.collection.length) {
			var firstPost = App.collection.at(0);
			var view = new PostView({ model: firstPost });
			this.appendNewView(view);
		}
	},
	createPost: function () {
		var data = {
			title: $("[name='title']").val(),
			author: $("[name='author']").val(),
			image: $("[name='image_url']").val(),
			content: $("[name='content']").val(),
			category: $("[name='category']").val()
		};

		$('input').val('');
		$('#posts-container').empty();

		App.collection.counter = App.collection.length -1;
		var postData = App.collection.create(data);
		var newPost = new PostView({ model: postData });
		App.appendNewView(newPost);
	},
	loadNext: function () {
		if (App.collection.length !== 0) {
			$("#posts-container").empty();
			var nextPost = App.collection.next();
			var postView = new PostView({ model: nextPost });
			App.appendNewView(postView);
		}
	},
	loadPrevious: function () {
		if (App.collection.length !== 0) {
			$('#posts-container').empty();
			var prevPost = App.collection.back();
			var postView = new PostView({ model: prevPost });
			App.appendNewView(postView);
		}
	},
	appendNewView: function(view) {
		$('#posts-container').append(view.el);
	}
};
