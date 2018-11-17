// Step 4 - NotePreviewView

App.Views.NotePreview = Backbone.View.extend({
	initialize: function() {
		console.log('New Note Preview created');
		// This line grabs the note-preview template from the page with jQuery
		this.template = Handlebars.compile($('#note-preview-template').html());
		// then it renders
		this.render();
		// If this.model changes, render is fired.
		this.listenTo(this.model, 'change', this.render);
		// If this.model changes, the preview view is removed from the page
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function() {
		// pass the model's JSON into the Template
		var renderedTemplate = this.template(this.model.toJSON());
		// makes an empty div with the template inside.
		// Preview list can then take it and prepend to Preview List's el
		this.$el.html(renderedTemplate);
		// this.$('span').hide();
	},
	deleteNote: function() {
		this.model.destroy();
	},
	showNoteView: function() {
		console.log('note shown');
		// resets this Apps noteView to now take the model that we clicked on.  
		// noteView will has a listener to re-render if it's model is changed.  
		App.noteView.setNote(this.model);
		// $('#note-view').fadeIn(1000);
	},
	events: {
		'click p': 'showNoteView',
		'click span.delete': 'deleteNote'
	}
});
