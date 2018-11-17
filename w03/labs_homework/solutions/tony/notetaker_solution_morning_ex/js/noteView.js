// Step 5 - Note View

App.Views.Note = Backbone.View.extend({

	el: '#note-view',

	initialize: function() {
		console.log('New Note view MADE!!!!!');
		this.fullTemplate = Handlebars.compile($('#full-note-template').html());
		this.newTemplate = Handlebars.compile($('#new-note-template').html());
 		this.editTemplate = Handlebars.compile($('#edit-note-template').html());

 		// In the instructions I may have said this.newNote. 
 		// This only matters depending on how you want the app to start.  
		this.render();
	},
	render: function() {
		var modelData = this.model.toJSON();
		this.$el.html(this.fullTemplate(modelData));
	},
	newNote: function() {
		this.$el.html(this.newTemplate());
	},
	setNote: function(note) {
		this.model = note;
		this.render();
		// This listener was added. Not part of HW (we did this in class)
		// 
		this.listenTo(this.model, 'change', this.render);
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
	},
	updateNote: function() {
    this.model.save({
      title: this.$('#title').val(),
      content: this.$('#content').val()
    });
    // this.render();
  },
	events: {
		'click .delete': 'deleteNote',
		'click .new': 'newNote',
		'click .create': 'createNote',
		'click .edit': 'editNote',
		'click .update': 'updateNote'
	}
});
