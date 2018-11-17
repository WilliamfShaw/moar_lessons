App.Views.Results = Backbone.View.extend({
	el: '#results-container',

	initialize: function() {
		console.log('New Results View');
	},

	// Should render the results of the API call
	// should render artist views if the collection
	// is storing artists
	// should render song views if the collection
	// is storing songs
	renderResults: function() {},

	// Renders and appends song views
	renderSongResults: function(model) {},

	// Renders and appends artist views
	renderArtistResults: function(model) {},

	events: {
		'click #search-button': 'search'
	},

	// Should perform the appropriate search
	// Using the collections methods for
	// AJAX requests for songs
	// AJAX requests for artists
	search: function() {}

});