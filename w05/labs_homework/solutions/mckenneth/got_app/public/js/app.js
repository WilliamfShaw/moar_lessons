var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');

	App.houses = new App.Collections.Houses;
	App.housesView = new App.Views.Houses({ collection: App.houses });

	App.houses.fetch({ reset: true });
});
