var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){

	App.notes = new App.Collections.Notes;
	App.notesPreviewListView = new App.Views.NotesPreviewList({ collection: App.notes });
	App.noteView = new App.Views.Note({model: new App.Models.Note});
	App.notes.fetch();

});
