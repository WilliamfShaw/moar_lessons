var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){
	App.noteRouter = new App.Routers.NoteRouter();
	App.noteView.newNote();
	Backbone.history.start();
});
