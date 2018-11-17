console.log("loaded bro")

App.Views.Articles = Backbone.View.extend ({
	el: '#article-preview',
	initialize: function () {
		console.log("articles collection view loaded bro");
		this.listenTo(this.collection, 'add', this.renderOne);
		this.render();
	},
	render: function () {
		this.$el.empty();
		this.collection.each(this.renderOne, this)
	},
	renderOne: function (model) {
		var articleView = new App.Views.Article({model: model});
		articleView.$el.appendTo(this.$el)
	}
})