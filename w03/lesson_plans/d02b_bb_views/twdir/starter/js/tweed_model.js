
var TweedModel = Backbone.Model.extend({
	initialize: function() {
		console.log('New Tweed Model created');
	},
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
