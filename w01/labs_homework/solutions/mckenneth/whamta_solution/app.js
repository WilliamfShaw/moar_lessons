var trainMenu = "The (L) Train, The (N) Train, The (S)ix Train",
	  trainLines = 'LNS',
		lTrain = "8th Ave, 6th Ave, Union Square, 3rd Ave, 1st Ave, Bedford Ave",
		nTrain = "Times Square, Herald Square, 28th St, 23rd St - WHAM Nexus, Union Square, 8th St",
		sTrain = "Grand Central, 33rd St, 28th St, 23rd St, Union Square, Astor Place";

var userSelection = prompt(trainMenu + "\nPlease Select A Line").toUpperCase();
console.log("You chose the " + userSelection + " Train");

if (userSelection === "L") {
	console.log(lTrain);
} else if (userSelection === "N") {
	console.log(nTrain);
} else if (userSelection === "S") {
	console.log(sTrain);
} else {
	console.log("Sorry I don't know that train");
};
console.log("Thanks for your choosing WHAMTA!");

// search for a station in the list of stations. alert the user that the station exists or doesnt.

var lineSelection = prompt("Search for a line for a stop" + "\n" + trainMenu).toUpperCase();

var stationName = prompt("Which station would you like to look for?");
console.log("Search for " + stationName + " Station");

if (trainLines.search(lineSelection) !== -1)  {
	if (lineSelection === "L" && lTrain.search(stationName) != -1 ){
		alert(stationName + " is on this line");
	} else if(lineSelection === "N" && nTrain.search(stationName) != -1) {
		alert(stationName + " is on this line");
	} else if (lineSelection === "S" && sTrain.search(stationName) != -1) {
		alert(stationName + " is on this line");
	} else {
		alert("This station is not on this line");
	}
} else {
	console.log("Sorry I don't know that train");
}
