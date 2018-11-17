// Step 5 - Note View

App.Views.Note = Backbone.View.extend({
	el: '#note-view',
	initialize: function() {
		console.log('New Note View created');
    // create the three templates that this view has.  
		this.fullTemplate = Handlebars.compile($('#full-note-template').html());
		this.editTemplate = Handlebars.compile($('#edit-note-template').html());
		this.newTemplate = Handlebars.compile($('#new-note-template').html());

		this.renderNewForm()
	},
	render: function() {
    // gets the model's attributes
		var modelData = this.model.toJSON();
    // passes them into the template
		var renderedTemplate = this.fullTemplate(modelData);
    // places the rendered template in the html of this view's el.
		this.$el.html(renderedTemplate);
	},
  setNote: function(note) {
    // Takes a new note, and renders it.  The link from preview View.
    this.model = note;
    this.render();
  },
	createNote: function() {
    // Makes the new note in the notes collection
		App.notes.create({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
    // Calls set note on it to render it to the page.  
    this.setNote(App.notes.last());
	},
	destroyNote: function() {
    this.model.destroy();
    this.renderNewForm();
  },
  updateNote: function() {
    this.model.save({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
    this.render();
  },
  renderEditForm: function() {
    this.$el.html(this.editTemplate(this.model.toJSON()));
  },
  renderNewForm: function() {
    console.log("HI");
    this.$el.html(this.newTemplate());
  },
  events: {
  	'click .delete': 'destroyNote',
  	'click .edit': 'renderEditForm',
  	'click .update': 'updateNote',
  	'click .new': 'renderNewForm',
  	'click .create': 'createNote' 
  }
});