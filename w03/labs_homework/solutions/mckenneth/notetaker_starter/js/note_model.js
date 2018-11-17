var App = {
	Models: {},
	Collections: {},
	Views: {}
};

App.Models.Note = Backbone.Model.extend({
	initialize: function() {
		console.log('new model');
	},
	defaults: {
		title: 'Poop',
		content: 'The Poop Story'
	},
	update: function(params) {
		this.save(params);
	}
});