console.log("loaded bro")

App.Views.Article = Backbone.View.extend ({
	className: "article-result",
	initialize: function () {
		console.log("article view loaded bro");
		this.template = Handlebars.compile( $('#article-template').html() );
		this.listenTo(this.model, 'change', this.render);
	},
	render: function () {
		var renderView = this.template(this.model.toJSON());
		this.$el.html(renderView);
	}, 
	events: {
		'click .title': 'showModal'
	},
	showModal: function () {
		App.articleModalView.model = this.model;
		App.articleModalView.render();
		App.articleModalView.show();
	}
})