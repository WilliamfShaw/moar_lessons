App.Models.Artist = Backbone.Model.extend({
	initialize: function() {
		console.log('New Artist Model Created', this.get('artistName'));
	}
});