console.log("loaded bro");
var game = {
	start: function() {
		// ask the board to start the game
		// display the game board
		// call the play function to start game loop
		board.startGame();
		console.log( board.render() );
	},
	play: function(cell) {
		if ( !board.winner ) {
			if ( board.canBePlayed(cell) ) {
				board.makePlay(cell);
				console.log(board.render());
				board.checkWin();
		  } else {
		  	alert("Pick a different square")
		  }
	  } 
	}
};