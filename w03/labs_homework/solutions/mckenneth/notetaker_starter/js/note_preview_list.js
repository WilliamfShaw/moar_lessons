App.Views.PreviewList = Backbone.View.extend({
	el: '#preview-list-view',
	initialize: function() {
		console.log('new preview view');
		this.listenTo(this.collection, 'add', this.renderOne);
		this.listenTo(this.collection, 'reset', this.renderAll);
	},
	renderOne: function(model) {
		var view = new App.Views.Preview({model: model});
		this.$el.append(view.el);
	},
	renderAll: function() {
		this.collection.each(this.renderOne, this);
	}
});