App.Views.NotesPreviewList = Backbone.View.extend({
	el: '#preview-list-view',
	initialize: function() {
		console.log('New list view');
		this.listenTo(this.collection, 'add', this.renderOnePreview);
	},
	renderAllPreviews: function() {
		this.collection.each(this.renderOnePreview, this);
	},
	renderOnePreview: function(noteModel) {
		var newNoteItem = new App.Views.NotePreview({model: noteModel});
		this.$el.prepend(newNoteItem.el);
	}
});
