// Step 2 - variable to define local storage
var notetakerLocalStorage = new Backbone.LocalStorage('postdb');

App.Models.Note = Backbone.Model.extend({
	// initialize function to log something useful to the console.
	initialize: function() {
		console.log('New Model Created!');
	},
	// defaults of a NoteModel
	defaults: {
		title: "Title",
		content: "Content"
	},
	// localStorage
	localStorage: notetakerLocalStorage
});