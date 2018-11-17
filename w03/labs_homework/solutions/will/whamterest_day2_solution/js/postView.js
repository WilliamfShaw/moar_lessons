var PostView = Backbone.View.extend({
	className: 'post',
	initialize: function () {
		console.log("New View Made");
		this.listenTo(this.model, 'change', this.render);
		this.template = Handlebars.compile($("#post-template").html());
		this.render();
	},
	render: function () {
		var modelData = this.model.toJSON();
		var compiledTemplate = this.template( modelData );
		this.$el.html( compiledTemplate );
	},
	events: {
		'click .update': 'update'
	},
	update: function () {
		var image_url = $('.image_url').val();
		this.model.updateImage(image_url);
	}
});
