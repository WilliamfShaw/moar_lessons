App.Collections.Items = Backbone.Collection.extend({
	initialize: function() {
		console.log('New Collection created');
	},
	model: App.Models.Item,
	localStorage: new Backbone.LocalStorage('todos'),
	reversed: function() {
		var models = this.models.slice().reverse();
		var collection = new Backbone.Collection;
		collection.reset(models);
		return collection;
	}
});