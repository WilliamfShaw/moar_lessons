console.log("loaded bro");

$(function () {
	$('#new-post').on('click', App.createPost)
	$('#posts-container').on('click', '.delete', App.deletePost)
	App.renderAllPosts();
})


var App = {
	collection: new PostsCollection(),
	createPost: function () {
		var data = {
			title: $("[name='title']").val(),
			author: $("[name='author']").val(),
			image: $("[name='image_url']").val(),
			content: $("[name='content']").val(),
			category: $("[name='category']").val()
		};

		var newPost = App.collection.create(data);
		App.renderPost(newPost);
		$('input').val('');
	},
	renderPost: function (postModel) {
		var postsContainer = $('#posts-container')
		var title = postModel.get("title");
		var author = postModel.get("author");
		var image = postModel.get("image");
		var content = postModel.get("content");
		var category = postModel.get("category");
		var iD = postModel.get('id');

		var newPost = $("<div>").addClass('post').attr('id', iD);
		var postTitle = $("<p>").text(title).addClass('title');
		var postContent = $('<p>').text(content).addClass('content');
		var postAuthor = $("<p>").text(author).addClass('author');
		var postImage = $("<img>").addClass('image').attr('src', image)
		var deletePost = $("<p>").text('delete').addClass('delete').attr('data-id', iD)

		newPost.append(postTitle).append(postImage).append(postContent).append(postAuthor).append(deletePost).prependTo(postsContainer);
	},
	renderAllPosts: function () {
		App.collection.fetch();
		App.collection.each(App.renderPost);
	},
	deletePost: function () {
		console.log("delete Clicked")
		var modelId = $(this).attr('data-id');
		var model = App.collection.get(modelId);
		model.destroy();
		$(this).closest('.post').remove();
		App.renderAllPosts();
	}
};

