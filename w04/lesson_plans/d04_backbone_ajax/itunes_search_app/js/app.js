var App = {
	Models: {},
	Collections: {},
	Views: {}
};

$(function() {
	App.collection = new App.Collections.Searches;
	App.resultsView = new App.Views.Results({ collection: App.collection });
});