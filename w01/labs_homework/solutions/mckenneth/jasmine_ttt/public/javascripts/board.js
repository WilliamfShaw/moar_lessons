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
		if ( cellNumber > 8 || cellNumber < 0 ) { return false; }
		return this.cells[cellNumber] ? false : true;
	},
	makePlay: function(cellNumber) {
		if ( this.canBePlayed(cellNumber) ) {
			this.cells[cellNumber] = ( this.moves % 2 === 0 ) ? 'X' : 'O';
			this.moves++;
			return true;
		} else {
			console.log('Try again...');
			return false;
		}
	},
	hasWinningRow: function() {
		var rowOne   = this.cells[0] + this.cells[1] + this.cells[2];
		var rowTwo   = this.cells[3] + this.cells[4] + this.cells[5];
		var rowThree = this.cells[6] + this.cells[7] + this.cells[8];
		var rows     = [rowOne, rowTwo, rowThree];

		if ( rows.indexOf('XXX') != -1 ) {
			this.winner = 'X';
			return true;
		} else if ( rows.indexOf('OOO') != -1 ) {
			this.winner = 'O';
			return true;
		} else {
			return false;
		}
	},
	hasWinningColumn: function() {
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
			console.log('A winner has been crowned: ' + this.winner);
		} else if (this.hasWinningRow()) {
			console.log('A winner has been crowned: ' + this.winner);
		} else if (this.hasWinningDiagonal()) {
			console.log('A winner has been crowned: ' + this.winner);
		} else if (this.moves === 9 ) {
			console.log('DRAW');
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