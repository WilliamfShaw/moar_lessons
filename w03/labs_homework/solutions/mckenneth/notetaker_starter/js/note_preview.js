App.Views.Preview = Backbone.View.extend({
	className: 'note',
	initialize: function() {
		console.log('new preview')
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.template = Handlebars.compile($('#preview-view').html());
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	events: {
		'click .note-title':'showNote',
		'click span.delete':'deleteNote'
	},
	showNote: function() {
		App.noteView.setNote(this.model);
	},
	deleteNote: function(event) {
		this.model.destroy();
	}
});