App.Views.Note = Backbone.View.extend({
  el: '#note-view',

  initialize: function() {
    console.log('New Note view MADE!!!!!');
    this.fullTemplate = Handlebars.compile($('#full-note-template').html());
    this.newTemplate = Handlebars.compile($('#new-note-template').html());
    this.editTemplate = Handlebars.compile($('#edit-note-template').html());
  
    this.render();
  },
  render: function() {
    var modelData = this.model.toJSON();
    this.$el.html(this.fullTemplate(modelData));
  },
  newNote: function() {
    this.$el.html(this.newTemplate());
    App.router.navigate('new');
  },
  setNote: function(note) {
    this.model = note;
    this.render();
    this.listenTo(this.model, 'change', this.render);
    App.router.navigate('notes/' + this.model.get('id'));
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
    this.$el.html(this.editTemplate(this.model.toJSON()));
    App.router.navigate("notes/" + this.model.get('id') + "/edit");
  },
  updateNote: function() {
    this.model.save({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
    App.router.navigate('notes/' + this.model.get('id'));
  },
  events: {
    'click .delete': 'deleteNote',
    'click .new': 'newNote',
    'click .create': 'createNote',
    'click .edit': 'editNote',
    'click .update': 'updateNote'
  }
});
