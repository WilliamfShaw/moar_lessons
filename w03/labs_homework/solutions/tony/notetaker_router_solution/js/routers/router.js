App.Routers.Router = Backbone.Router.extend ({
	routes: {
    '': 'index',
    'new': 'new',
    'notes/:id': 'show',
    'notes/:id/edit': 'edit'
  },
  initialize: function() {
    console.log('New Router!');
    App.notes = new App.Collections.Notes;
    App.notesPreviewListView = new App.Views.NotesPreviewList({ collection: App.notes });
    App.noteView = new App.Views.Note({model: new App.Models.Note});
    App.notes.fetch();
  },
  index: function() {
  	console.log('index visited');
  	App.noteView.newNote();
  },
  new: function() {
  	console.log('visited the new form');
  	App.noteView.newNote();
  },
  edit: function(id) {
  	console.log('visited the edit form for ' + id);
  	var editModel = App.notes.get(id);
  	var editModelData = editModel.toJSON();
  	App.noteView.editNote(editModelData);
  },
  show: function(id) {
  	console.log('visiting the show page for ' + id);
  	var showModel = App.notes.get(id);
  	var showModelData = showModel.toJSON();
    App.noteView.setNote();
  }
});