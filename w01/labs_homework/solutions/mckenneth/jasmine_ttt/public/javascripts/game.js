var game = {
	start: function() {
		// ask the board to start the game
		// display the game board
		// call the play function to start game loop
		board.startGame();
		console.log( board.render() );
		this.play();
	},
	play: function() {
		// define a variable playAgain, it is not set but will be set later
		var playAgain;
		// while there is no current winner for the board
		// ask the user for the board position they wish to play
		while ( !board.winner ) {
			var userChoice = parseInt( prompt('Select a cell to play. Numbers please') );

			// if a play is made that is successful
			// render the most recent board
			// check for a winner
			if ( board.makePlay(userChoice) ) {
				console.log( board.render() );
				board.checkWin();
			}
			// else just render the board
			else {
				console.log( board.render() );
			}
			// if the number of moves is 9 and there is no winner for the board
			// game draws, break out of loop
			 if ( board.moves === 9 && !board.winner ) {
				board.winner = true;
			}
		}

		// ask if they would like to play again
		playAgain = prompt('Play again?? \n [y] to continue \n [enter] to exit').toLowerCase();
		if ( playAgain === 'y' ) {
			game.start();
		}
	}
};