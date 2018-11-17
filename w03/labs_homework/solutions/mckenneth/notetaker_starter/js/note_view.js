App.Views.Note = Backbone.View.extend({
	el: '#note-view',
	initialize: function() {
		console.log('note view');
		this.mainTemplate = Handlebars.compile($('#noteview').html());
		this.editTemplate = Handlebars.compile($('#edit-view').html());
		this.newTemplate = Handlebars.compile($('#new-view').html());
		this.newNote();
	},
	newNote: function() {
		this.$el.html(this.newTemplate());
	},
	createNote: function() {
		var data = {
			title: $('#title').val(),
			content: $('#content').val()
		};
		App.collection.create(data);
		this.model = App.collection.last();
		this.showNote();
	},
	editNote: function() {
		this.$el.html(this.editTemplate(this.model.toJSON()));
	},
	updateNote: function() {
		var data = {
			title: $('#title').val(),
			content: $('#content').val()
		};
		this.model.update(data);
		this.showNote();
	},
	setNote: function(model) {
		this.model = model;
		this.showNote();
	},
	showNote: function() {
		this.listenTo(this.model, 'destroy', this.newNote);
		this.$el.html(this.mainTemplate(this.model.toJSON()));
	},
	deleteNote: function() {
		this.model.destroy();
	},
	events: {
		'click .new': 'newNote',
		'click .create': 'createNote',
		'click .edit': 'editNote',
		'click .update': 'updateNote',
		'click .delete': 'deleteNote'
	}


});