App.Models.Team = Backbone.Model.extend ({
	initialize: function () {
		console.log("Team Model Made")
	}, 
	defaults: {
		teamName: "New York Mets",
		image: "http://aaja.org/chapters/newyork/wp-content/uploads/2013/05/New-York-Mets-Logo-300.jpg",
		mascot: "Mr. Met", 
		manager: "Terry Collins"
	}
});