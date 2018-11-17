// Create global App namespace, with the things we need inside
var App = {
	Models: {},
	Collections: {},
	Views: {},
	storage: new Backbone.LocalStorage('twdir'),
	createTweed: function() {
		var data = {
			content: $('[name="content"]').val(),
			author: $('[name="author"]').val()
		};

		var newTweed = App.collection.create(data);
		$('input').val('');
	}
};

$(function() {
	App.collection = new App.Collections.TweedsCollection();
	App.collectionView = new App.Views.TweedCollectionView({ collection: App.collection });
	App.modalView = new App.Views.ModalView();

	App.collection.fetch();

	$('#new-tweed-form').on('click', '#submit', App.createTweed);
});
