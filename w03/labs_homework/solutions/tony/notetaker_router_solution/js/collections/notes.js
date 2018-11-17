App.Collections.Notes = Backbone.Collection.extend({
	initialize: function() {
		console.log('New Collection Created');
	},
	model: App.Models.Note,
	localStorage: notetakerLocalStorage
});
