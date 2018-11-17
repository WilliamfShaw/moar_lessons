var menu = function() {
  var userInput = prompt('Please enter (V) to view lines, (E) to edit lines, or (Q)uit.').toUpperCase();
  while (userInput != 'Q') {
    if (userInput === 'V') {
      whamtaSystem.lineNames();
      var viewInput = prompt('Choose line to view stations').toUpperCase();
      whamtaSystem.lines[viewInput].listStations();
      var tripInput = prompt('Enter two stations (separated by commas) to find the stops between them OR (b)ack.');
      var trips = tripInput.split(',');
      if (trips.length === 2) {
        whamtaSystem.lines[viewInput].stopsBtwnStations(trips[0], trips[1]);
      } else if (trips[0].toUpperCase() === 'B') {
      	userInput = prompt('Please enter (V) to view lines, (E) to edit lines, or (Q)uit.').toUpperCase();
      }
    } else if (userInput === 'E') {
      userInput = prompt("(A) Add Station to Existing Line, (N) Add Line to SOLOTA, (Q) to Quit ").toUpperCase();
        if (userInput === 'A') {
          whamtaSystem.lineNames();
          var newStation = prompt('Enter Line Name THEN station name, separated by a comma.');
          var newStationSplit = newStation.split(',');
          whamtaSystem.lines[newStationSplit[0].toUpperCase()].addStation(newStationSplit[1]);
          whamtaSystem.lines[newStationSplit[0]].listStations();
          userInput = prompt('Please enter (V) to view lines, (E) to edit lines, or (Q)uit.').toUpperCase();
        } else if (userInput === 'N') { 
          var newLine = prompt('Enter line name').toUpperCase();
          var newStations = prompt('Enter new stations separated by commas');
          var newStationsArray = newStations.split(',');
          whamtaSystem.addLine(newLine, newStationsArray);
          whamtaSystem.lines[newLine].listStations();
          userInput = prompt('Please enter (V) to view lines, (E) to edit lines, or (Q)uit.').toUpperCase();
        } 
    }
  }
  console.log("Thanks for using SOLOTA!!!")
};