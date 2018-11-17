App.Views.ArticleModal = Backbone.View.extend({
	el: '#article-modal',
	initialize: function () {
		console.log("modal view loaded bro");
		this.template = Handlebars.compile( $('#modal-template').html() );
	},
	render: function () {
		this.$el.empty()
		var renderModel = this.template(this.model.toJSON());
		this.$el.append(renderModel)
	},
	events: {
		'click #close': 'hide'
	},
	show: function () {
		this.$el.show();
	},
	hide: function () {
		this.$el.hide();
	}
});