App.Collections.TweedsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('New Tweed Collection');
	},
	model: App.Models.TweedModel,
	localStorage: App.storage
});
