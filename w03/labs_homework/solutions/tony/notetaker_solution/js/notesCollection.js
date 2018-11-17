// Step 2 - NotesCollection
App.Collections.Notes = Backbone.Collection.extend({
	initialize: function() {
		// Useful console.log
		console.log('New Collection Created');
	},
	// define the model for this collection
	model: App.Models.Note,
	// define local storage using the var we made in NoteModel -- Why local storage here and in model!?
	localStorage: notetakerLocalStorage
});