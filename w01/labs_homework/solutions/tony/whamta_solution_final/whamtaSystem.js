var whamtaSystem = {
	lines: {
		L: lTrain,
		N: nTrain,
		S: sTrain
	},
	lineNames: function() {
		// You can use a for-loop with an object to print just the properties like this: 
		// for (var properties in someObject) {
		// 	console.log(properties);
		// }
		// I used stationName because that is what the properties are in this case and I am trying to be semantic in naming my variables.  
		for (var stationName in this.lines) {
			console.log(stationName);
		}
	},
	addLine: function(newLineName, arrayOfStationNames) {
		// This line makes a brand new line objects with associated properties (attributes and behaviors).  
		var newLine = lineFactory(newLineName, arrayOfStationNames);
		// object[property] = value;
		this.lines[newLineName] = newLine;
	}
};

























