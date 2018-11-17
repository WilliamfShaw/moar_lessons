App.Views.SongResult = Backbone.View.extend({

	tagName: 'section',

	className: 'song',

	initialize: function() {
		console.log('New Song Result view');
		this.template = Handlebars.compile( $('#song-template').html() );
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	}

});