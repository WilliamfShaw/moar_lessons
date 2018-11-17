var twdirLocalStorage = new Backbone.LocalStorage('twdir');

var TweedModel = Backbone.Model.extend({
	localStorage: twdirLocalStorage,
	initialize: function() {
		console.log('New Tweed Model created');
	},
	defaults: {
		content: "Whoops forgot the text",
		author: "FAIL",
		votes: 0
	},
	updateVotes: function(voteValue) {
		var votes = this.get('votes');
		this.save('votes', votes + voteValue);
	}
});
