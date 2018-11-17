var notetakerLocalStorage = new Backbone.LocalStorage('postdb');

App.Models.Note = Backbone.Model.extend({
	initialize: function() {
		console.log('New Model Created!');
	},
	defaults: {
		title: "Title",
		content: "Content"
	},
	localStorage: notetakerLocalStorage
});