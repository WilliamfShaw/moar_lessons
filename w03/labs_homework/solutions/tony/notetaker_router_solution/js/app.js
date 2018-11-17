$(function() {
	App.router = new App.Routers.Router();
	Backbone.history.start();
});

var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};
