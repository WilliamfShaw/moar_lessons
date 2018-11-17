App.Collections.Searches = Backbone.Collection.extend({
	initialize: function() {
		console.log('Search Collection created');
	},

	apiRootURL: 'http://45.55.149.232/api/',

	searchForSongs: function(song) {
		console.log('Searching for the song:', song);
		var song = encodeURI(song);
		var searchQuery = this.apiRootURL + 'search_for_songs?song=' + song;
		$.ajax({
			url: searchQuery,
			method: 'GET'
		})
		.done(this.addSongs)
	},

	addSongs: function(data) {
		var results = data.results;
		App.collection.currentModel = 'song';
		var songModels = results.map(function(song){ return new App.Models.Song(song) });

		App.collection.reset(songModels);
	},

	searchForArtist: function(artist) {
		console.log('Searching for:', artist);
		var artist = encodeURI(artist);
		var endpoint = 'search_for_artist?artist=';
		var searchQuery = this.apiRootURL + endpoint + artist;
		$.ajax({
			url: searchQuery,
			method: 'GET'
		})
		.done(this.addArtists);
	},

	addArtists: function(data) {
		var results = data.results;
		var artistModels = results.map(function(artist) { return new App.Models.Artist(artist); });

		App.collection.currentModel = 'artist';
		App.collection.reset(artistModels);
	},

	searchForArtistSongs: function(artist) {
		console.log('Searching for tracks by:', artist);
		var artist = encodeURI(artist);
		var endpoint = 'search_for_artist_tracks?artist=';
		var searchQuery = this.apiRootURL + endpoint + artist;

		$.ajax({
			url: searchQuery,
			method: 'GET'
		})
		.done(this.addSongs)
	},

	searchForApps: function(app) {
		console.log('Searching for:', app);
		var app = encodeURI(app);
		var endpoint = 'search_for_apps?app=';
		var searchQuery = this.apiRootURL + endpoint + app;
		$.ajax({
			url: searchQuery,
			method: 'GET'
		})
		.done(this.addApps);
	},

	addApps: function(data) {
		var results = data.results;
		var appModels = results.map(function(app) {
			return new App.Models.Apps(app);
		});

		App.collection.currentModel = 'app';
		App.collection.reset(appModels);
	}

});