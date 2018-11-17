var lineFactory = function(lineName, arrayOfStationNames) {
	var line = {
		name: lineName,
		stations: arrayOfStationNames,
		listStations: function() {
			for (var i = 0; i < this.stations.length; i++) {
				console.log(this.stations[i]);
			}
		},
		addStation: function(newStation) {
			this.stations.push(newStation);
		},
		stopsBtwnStations: function(stationStart, stationEnd) {
			var startStationNumber = this.stations.indexOf(stationStart);
			var endStationNumber = this.stations.indexOf(stationEnd); 
			var stopsBetween = parseInt(startStationNumber) - parseInt(endStationNumber);
			if (stopsBetween < 0){
				console.log(stopsBetween * -1)
			} else if(stopsBetween > 0) {
				console.log(stopsBetween);
			}
		}
	}
	return line;
}

var lTrainArr = [
	"8th Ave",
	"6th Ave",
	"Union Square",
	"3rd Ave",
	"1st Ave",
	"Bedford Ave"
	];

var nTrainArr = [
	"Times Square",
	"Herald Square",
	"28th St",
	"23rd St - WHAM Nexus",
	"Union Square",
	"8th St"
	];

var sTrainArr = [
	"Grand Central",
	"33rd St",
	"28th St",
	"23rd St",
	"Union Square",
	"Astor Place"
	];

// Makes our lines.
var lTrain = lineFactory("L", lTrainArr);

var nTrain = lineFactory("N", nTrainArr);

var sTrain = lineFactory("S", sTrainArr);


