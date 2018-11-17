App.Views.Results = Backbone.View.extend({
	el: '#results-container',

	initialize: function() {
		console.log('New Results View');
		this.listenTo(this.collection, 'reset', this.renderResults);
	},

	renderResults: function() {
		this.$('#results').empty();
		if (this.collection.currentModel === 'song'){
			this.collection.each(this.renderSongResults, this);
		} else if (this.collection.currentModel === 'artist') {
			this.collection.each(this.renderArtistResults, this);
		} else if (this.collection.currentModel === 'app') {
			this.collection.each(this.renderAppResults, this);
		}
	},

	renderSongResults: function(model) {
		this.$('#results').append( new App.Views.SongResult({ model: model }).$el );
	},

	renderArtistResults: function(model) {
		this.$('#results').append( new App.Views.ArtistResult({ model: model }).$el );
	},

	renderAppResults : function(model) {
		this.$('#results').append( new App.Views.AppResult({ model: model }).$el );
	},

	events: {
		'click #search-button': 'search'
	},

	search: function() {
		var searchType = $('[name="search-type"]').val();
		var query = $('[name="search"]').val();
		if (searchType === 'song'){
			this.collection.searchForSongs(query);
		} else if (searchType === 'artist') {
			this.collection.searchForArtist(query);
		} else if (searchType === 'app') {
			this.collection.searchForApps(query);
		}
	}

});