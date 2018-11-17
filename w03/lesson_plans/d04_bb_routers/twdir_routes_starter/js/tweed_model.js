App.Models.TweedModel = Backbone.Model.extend({
	initialize: function() {
		console.log('New Tweed Model created');
	},

	localStorage: App.storage,

	defaults: {
		content: "Blank Tweed",
		author: "Anon",
		votes: 0
	},
	updateVotes: function(voteValue) {
		var votes = this.get('votes');
		this.save('votes', votes + voteValue);
	}
});
