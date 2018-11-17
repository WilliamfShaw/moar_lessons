App.Collections.Notes = Backbone.Collection.extend({
	initialize: function() {
		console.log('new collection');
	},
	model: App.Models.Note,
	localStorage: new Backbone.LocalStorage('note-taker')
});