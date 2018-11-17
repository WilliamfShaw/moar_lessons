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

	events: {},

	// callback for a click event
	// Should make use of the apps collection
	// to make an ajax request for the songs
	// belonging to the artist model displayed
	// within this view
	getTracksForArtist: function() {}

});