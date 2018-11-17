console.log("loaded bro");

var board = {
	cells:  null,
	moves:  null,
	winner: null,
	startGame: function() {
		this.cells = [
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined,
			undefined
		];
		this.winner = null;
		this.moves = 0;
	},
	canBePlayed: function(cellNumber) {
		// If the cellNumber is out of the bounds of the board then return false immediately
		if ( cellNumber > 8 || cellNumber < 0 ) { return false; }
		// if the element at the cellNumber index value has a value, return false (it cannot be played)
		// else if it has no value return true (it can be played on)
		return this.cells[cellNumber] ? false : true;
	},
	makePlay: function(cellNumber) {
		// if the cell is a playable cell
		if ( this.canBePlayed(cellNumber) ) {
			// if the current move is even fill the chosen cell with an X
			// else fill the chosen cell with an O
			this.cells[cellNumber] = ( this.moves % 2 === 0 ) ? 'X' : 'O';
			// increment the number of moves by 1 to switch the current player
			this.moves++;
			// return true indicating that the play was successful
			return true;
		} else {
			console.log('Try again...');
			// return false indicating that the play was invalid
			return false;
		}
	},
	hasWinningRow: function() {
		// Add all of the values in the cell indices that would represent a row
		// row 1 is indices: 0, 1, 2
		// row 2 is indices: 3, 4, 5
		// row 3 is indices: 6, 7, 8
		var rowOne   = this.cells[0] + this.cells[1] + this.cells[2];
		var rowTwo   = this.cells[3] + this.cells[4] + this.cells[5];
		var rowThree = this.cells[6] + this.cells[7] + this.cells[8];
		// store all of the row's in a single array
		var rows     = [rowOne, rowTwo, rowThree];

		// if the array contains a string of 3 X's then X has won
		// set winner equal to X and return true
		if ( rows.indexOf('XXX') != -1 ) {
			this.winner = 'X';
			return true;
		}
		// if the array contains a string of 3 O's then O has won
		// set winner equal to O and return true
		else if ( rows.indexOf('OOO') != -1 ) {
			this.winner = 'O';
			return true;
		}
		// else no winner has been found, return false
		else {
			return false;
		}
	},
	hasWinningColumn: function() {
		// works the same as the method for finding winning rows
		var columnOne   = this.cells[0] + this.cells[3] + this.cells[6];
		var columnTwo   = this.cells[1] + this.cells[4] + this.cells[7];
		var columnThree = this.cells[2] + this.cells[5] + this.cells[8];
		var columns     = [columnOne, columnTwo, columnThree];

		if ( columns.indexOf('XXX') != -1 ) {
			this.winner = 'X';
			return true;
		} else if ( columns.indexOf('OOO') != -1 ) {
			this.winner = 'O';
			return true;
		} else {
			return false;
		}
	},
	hasWinningDiagonal: function() {
		// same as for rows
		var diagonalOne = this.cells[0] + this.cells[4] + this.cells[8];
		var diagonalTwo = this.cells[2] + this.cells[4] + this.cells[6];
		var diagonals   = [diagonalOne, diagonalTwo];

		if (diagonals.indexOf('XXX') != -1) {
			this.winner = 'X';
			return true;
		} else if (diagonals.indexOf('OOO') != -1) {
			this.winner = 'O';
			return true;
		} else {
			return false;
		}
	},
	checkWin: function() {
		if (this.hasWinningColumn()) {
			alert('A winner has been crowned: ' + this.winner);
		} else if (this.hasWinningRow()) {
			alert('A winner has been crowned: ' + this.winner);
		} else if (this.hasWinningDiagonal()) {
			alert('A winner has been crowned: ' + this.winner);
		} else if (this.moves === 9 ) {
			alert('DRAW');
		}
	},
	render: function() {
		return [
			'____________',
			'| T | I | C |',
			'| T | A | C |',
			'| T | O | E |',
			'_____________',
			'| '+(this.cells[0] || '_') +' | '+(this.cells[1] || '_') +' | '+ (this.cells[2] || '_') +' |',
			'| '+(this.cells[3] || '_') +' | '+(this.cells[4] || '_') +' | '+ (this.cells[5] || '_') +' |',
			'| '+(this.cells[6] || '_') +' | '+(this.cells[7] || '_') +' | '+ (this.cells[8] || '_') +' |',
			'_____________'
		].join('\n');
	}
};