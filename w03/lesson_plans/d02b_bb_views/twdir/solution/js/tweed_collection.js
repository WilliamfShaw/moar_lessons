var TweedsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('New Tweed Collection');
	},
	model: TweedModel,
	localStorage: twdirLocalStorage
});
