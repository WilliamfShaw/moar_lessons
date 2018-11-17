App.Views.AppResult = Backbone.View.extend({

	tagName: 'section',

	className: 'artist',

	initialize: function() {
		console.log('New App Result view');
		this.template = Handlebars.compile( $('#app-template').html() );
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	}

});