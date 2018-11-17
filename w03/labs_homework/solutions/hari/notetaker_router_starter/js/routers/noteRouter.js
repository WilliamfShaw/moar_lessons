App.Routers.NoteRouter = Backbone.Router.extend({
  initialize: function() {
    App.notes = new App.Collections.Notes;
  	App.notesPreviewListView = new App.Views.NotesPreviewList({ collection: App.notes });
  	App.noteView = new App.Views.Note({model: new App.Models.Note});
  	App.notes.fetch();
  },

  routes: {
    '': 'redirectToNew',
    'notes/new': 'new',
    'notes/:id': 'show',
    'notes/:id/edit': 'edit'
  },

  redirectToNew: function() {
    // Redirect to the new page, and force the router to execute the matching
    // function
    this.navigate('notes/new', { trigger: true });
  },

  new: function() {
    App.noteView.newNote();
  },

  show: function(id) {
    var note = new App.Models.Note({ id: id });
    note.fetch();
    App.noteView.setNote(note);
  },

  edit: function(id) {
    var note = new App.Models.Note({ id: id });
    note.fetch();
    App.noteView.setNote(note);
    App.noteView.editNote();
  }
});
