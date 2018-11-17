App.Views.HumanModal = Backbone.View.extend({

	el: '#modal',

	initialize: function() {
		this.template = Handlebars.compile( $('#human-modal-template').html() );
		this.render();
	},

	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
		this.$el.show();
	},

	events: {
		'click .close': 'hideModal'
	},

	hideModal: function() {
		this.$el.fadeOut(500);
		this.model = null;
	}

});