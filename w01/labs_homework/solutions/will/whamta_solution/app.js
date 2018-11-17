var trainMenu = "The (L) Train, The (N) Train, The (S)ix Train";
var lTrain = "8th Ave, 6th Ave, Union Square, 3rd Ave, 1st Ave, Bedford Ave";
var nTrain = "Times Square, Herald Square, 28th St, 23rd St - WHAM Nexus, Union Square, 8th St";
var sTrain = "Grand Central, 33rd St, 28th St, 23rd St, Union Square, Astor Place"


var userSelection = prompt(trainMenu + "\nPlease Select A Line").toUpperCase();
console.log("You chose the " + userSelection + " Train");

if (userSelection === "L") {
	console.log(lTrain);
	console.log("Thanks for your selection!");
} else if (userSelection === "N") {
	console.log(nTrain);
	console.log("Thanks for your selection!");
} else if (userSelection === "S") {
	console.log(sTrain);
	console.log("Thanks for your selection!");
} else {
	console.log("Not a valid choice");
};

// search for a station in the list of stations. alert the user that the station exists or doesnt. 

var stationSearch = prompt("Search for a line for a stop" + "\n" + trainMenu).toUpperCase();

if (stationSearch === "L"){
	var stationName = prompt("Which station would you like to look for?");
	console.log("Search for " + stationName + " Station")
	if (lTrain.search(stationName) != -1 ) {
		alert(stationName + " is on this line");
	} else{
		alert("This station is not on this line");
	}
} else if(stationSearch === "N") {
	var stationName = prompt("Which station would you like to look for?");
	console.log("Search for " + stationName + " Station")
	if (nTrain.search(stationName) != -1 ) {
		alert(stationName + " is on this line");
	} else {
		alert("This station is not on this line");
	}
} else if (stationSearch === "S") {
	var stationName = prompt("Which station would you like to look for?");
	console.log("Search for " + stationName + " Station");
	if (sTrain.search(stationName) != -1) {
		alert(stationName + " is on this line");
	} else {
		alert("This station is not on this line");
	}
} else {
	alert("Not a valid choice");
};