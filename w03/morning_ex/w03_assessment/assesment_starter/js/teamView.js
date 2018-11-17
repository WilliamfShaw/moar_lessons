App.Views.TeamView = Backbone.View.extend ({
	el: '#team-container',
	initialize: function() {
		console.log("New Team View Made")
		this.template = Handlebars.compile($('#team-template').html());
		this.render();
	},
	render: function () {
		var modelData = this.model.toJSON();
		var compiledTemplate = this.template(modelData);
		this.$el.html(compiledTemplate);
	}, 
	events: {
		'click .image': 'mascot'
	},
	mascot: function () {
		$('.image').attr('src', 'http://newyork.mets.mlb.com/nym/images/fan_forum/mrmet_290x315.jpg')
	}
});