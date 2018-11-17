App.Views.Note = Backbone.View.extend({
  el: '#note-view',

  initialize: function() {
    console.log('New Note view MADE!!!!!');
    this.fullTemplate = Handlebars.compile($('#full-note-template').html());
    this.newTemplate = Handlebars.compile($('#new-note-template').html());
    this.editTemplate = Handlebars.compile($('#edit-note-template').html());
  },
  render: function() {
    var modelData = this.model.toJSON();
    App.noteRouter.navigate('notes/' + this.model.get('id'));
    this.$el.html(this.fullTemplate(modelData));
  },
  newNote: function() {
    App.noteRouter.navigate('notes/new');
    this.$el.html(this.newTemplate());
  },
  setNote: function(note) {
    this.model = note;
    this.render();
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.newNote);
  },
  deleteNote: function() {
    this.model.destroy();
    this.newNote();
  },
  createNote: function() {
    App.notes.create({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
    this.setNote(App.notes.last());
  },
  editNote: function() {
    App.noteRouter.navigate('notes/' + this.model.get('id') + '/edit');
    this.$el.html(this.editTemplate(this.model.toJSON()));
  },
  updateNote: function() {
    this.model.save({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
  },
  events: {
    'click .delete': 'deleteNote',
    'click .new': 'newNote',
    'click .create': 'createNote',
    'click .edit': 'editNote',
    'click .update': 'updateNote'
  }
});
