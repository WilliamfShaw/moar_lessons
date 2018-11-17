App.Views.AuthorsListView = Backbone.View.extend({

	tagName: 'section',

	className: 'authors',

	initialize: function() {
		console.log('New Author List View');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderAuthor);
	},

	render: function() {
		this.collection.each(this.renderAuthor, this);
	},

	renderAuthor: function(authorModel) {
		this.$el.prepend(new App.Views.Author({ model: authorModel }).$el);
	}
});