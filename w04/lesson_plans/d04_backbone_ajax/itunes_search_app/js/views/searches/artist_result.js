App.Views.ArtistResult = Backbone.View.extend({

	tagName: 'section',

	className: 'artist',

	initialize: function() {
		console.log('New Artist Result view');
		this.template = Handlebars.compile( $('#artist-template').html() );
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	},

	events: {
		'click .view':'getTracksForArtist'
	},

	getTracksForArtist: function() {
		App.collection.searchForArtistSongs( this.model.get('artistName') );
	}

});