var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function(){
	console.log('cool is a feeling');
	// Initialized everything in my router.  
	App.movieRouter = new App.Routers.Movie();
  Backbone.history.start();
});
