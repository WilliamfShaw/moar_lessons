App.Collections.Searches = Backbone.Collection.extend({
	initialize: function() {
		console.log('Search Collection created');
	},

	// Base URL for the API
	apiRootURL: null,

	// Will perform an AJAX request to API
	// at the endpoint for searching for songs
	// The DONE callback should call the collections
	// addSongs method
	searchForSongs: function(song) {},

	// Will set the current model property of the collection to 'song'
	// should iterate over the array of results
	// creating a new model for each, which should be stored in an array
	// The array of model objects should be used to reset the collection
	addSongs: function(data) {},

	// Will perform an AJAX request to API
	// at the endpoint for searching for artists
	// The DONE callback should call the collections
	// addArtists method
	searchForArtist: function(artist) {},

	// Will set the current model property of the collection to 'artist'
	// should iterate over the array of results
	// creating a new Artist model for each, which should be stored in an array
	// The array of model objects should be used to reset the collection
	addArtists: function(data) {},

	// Will perform an AJAX request to API
	// at the endpoint for searching for artists songs
	// The DONE callback should call the collections
	// addSongs method
	searchForArtistSongs: function(artist) {}

});