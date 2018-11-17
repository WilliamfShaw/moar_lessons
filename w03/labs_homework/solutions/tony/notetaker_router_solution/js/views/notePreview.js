App.Views.NotePreview = Backbone.View.extend({
	initialize: function() {
		console.log('New Note Preview created');
		this.template = Handlebars.compile($('#note-preview-template').html());
		this.render();
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
	},
	deleteNote: function() {
		this.model.destroy();
	},
	showNoteView: function() {
		console.log('note shown');
		App.noteView.setNote(this.model);
	},
	events: {
		'click p': 'showNoteView',
		'click span.delete': 'deleteNote'
	}
});
