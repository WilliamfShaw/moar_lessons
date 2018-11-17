 $(function() {
  App.collection = new App.Collections.Notes();
  App.notesPreviewListView = new App.Views.PreviewList({ collection: App.collection });
  App.noteView = new App.Views.Note();
  App.collection.fetch();
});