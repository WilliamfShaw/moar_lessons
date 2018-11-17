var trainMenu = [
	"L", 
	"N", 
	"S"
	];

var lTrain = [
	"8th Ave",
	"6th Ave",
	"Union Square",
	"3rd Ave", 
	"1st Ave", 
	"Bedford Ave"
	];

var nTrain = [
	"Times Square", 
	"Herald Square", 
	"28th St", 
	"23rd St - WHAM Nexus", 
	"Union Square", 
	"8th St"
	];

var sTrain = [
	"Grand Central",
	"33rd St",
	"28th St",
	"23rd St", 
	"Union Square", 
	"Astor Place"
	];

var userSelection;

while (userSelection !== 'Q') {
	userSelection = prompt("Welcome to WHAMTA.\n" + 
		"Choose a line or (q)uit.\n" +
		trainMenu.join(' ')
	)
	.toUpperCase();

	if (userSelection === "Q") {
		console.log("Thanks for using WHAMTA");
	}	else if (trainMenu.indexOf(userSelection) === -1) {
		console.log("Not a valid option");
		userSelection = true;
	}	else {
			console.log("You chose the " +
				userSelection + 
				" Train\nHere are the stations on that line\n" +
				"----------------------------------");
			if (userSelection === trainMenu[0]) {
				for (var i = 0; i < lTrain.length; i++) {
					console.log(lTrain[i]);
				}
				var addToL = prompt('Would you like to add a station to this line? (y/n)');
				if (addToL === 'y') {
					var station = prompt('Please enter station name:')
					lTrain.push(station)
				}
			} else if (userSelection === trainMenu[1]) {
				for (var i = 0; i < nTrain.length; i++) {
					console.log(nTrain[i]);
				}
				var addToN = prompt('Would you like to add a station to this line? (y/n)');
				if (addToN === 'y') {
					var station = prompt('Please enter station name:')
					nTrain.push(station)
				}
			} else {
				for (var i = 0; i < sTrain.length; i++) {
					console.log(sTrain[i]);
				}
				var addToS = prompt('Would you like to add a station to this line? (y/n)');
				if (addToS === 'y') {
					var station = prompt('Please enter station name:')
					sTrain.push(station)
				}
			}
	}		
}


