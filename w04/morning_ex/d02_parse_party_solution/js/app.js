$(function () {
		
})

var hockeyParser = function () {
	var games = schedule.games;
	for ( var j = 0; j < games.length; j++ ) {
		var currentGame = games[j];
		var homeTeam = currentGame.teams[0].homeTeam;
		var awayTeam = currentGame.teams[0].awayTeam;
		var date = currentGame.date;
		var type = currentGame.gameType;
		console.log("Tonight, " + date + ", will be a " + type + " season game between, The " + homeTeam + " and The " + awayTeam + ".")
	}
}

var barParser = function() {
	var groups = bars.response.groups[0].items;
	for ( var i = 0; i < groups.length;i++ ) {
		var venue = groups[i].venue;
		var venueName = venue.name;
		var venueAddress = venue.location.formattedAddress.join(', ');
		var rating = venue.rating;
		var categories = venue.categories[0].name;
		var likes = groups[i].tips[0].likes.summary;
		console.log(venueName + " is a " + categories +  ", it is located at " + venueAddress + ". " + "Other users have rated this place a " + rating + ", it has " + likes + ".");
	}
}