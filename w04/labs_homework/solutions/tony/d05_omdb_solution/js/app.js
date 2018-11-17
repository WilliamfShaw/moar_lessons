var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){
	console.log('cool is a feeling');
	App.movieRouter = new App.Routers.Movie();
  Backbone.history.start();
});
