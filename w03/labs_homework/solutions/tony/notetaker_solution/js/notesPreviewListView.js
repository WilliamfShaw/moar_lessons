// Step 3 - The Note Preview List View

App.Views.NotesPreviewList = Backbone.View.extend({
	// Set the element of this view
	el: '#preview-list-view',
	// Initialize first logs a message to the console.
	initialize: function() {
		console.log('New list view');
		// This listening starts listening for any new previews added to this collection.
		// If one is added, we fire this.renderOnePreview
		this.listenTo(this.collection, 'add', this.renderOnePreview);
		// this.listenTo(this.collection, 'reset', this.renderAllPreviews); -- Check this with the app.js
	},
	renderAllPreviews: function() {
		//.each by Backbone default will render these previews in the window.
		//Thus we must pass this to it also.  This scopes 'this' to just the view itself.
		this.collection.each(this.renderOnePreview, this);
	},
	renderOnePreview: function(noteModel) {
		// Make a new NotePreviewView with its model set to the noteModel
		var newNoteItem = new App.Views.NotePreview({model: noteModel});
		// This takes the element of this NotesPreviewViewList
		// and prepends to it, the element of the resulting NotePreviewView.
		this.$el.prepend(newNoteItem.el);
	}
});