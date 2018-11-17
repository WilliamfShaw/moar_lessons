var App = {
	Models: {}, 
	Views: {}
};

$(function () {
	App.teamView = new App.Views.TeamView({model: new App.Models.Team()});
});
