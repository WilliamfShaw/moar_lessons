var Board = function() {
	this.cells = [];
	this.winner = null;
	this.currentPlayer = null;
};

Board.prototype.info = function() {
	for ( var i = 0; i < this.cells.length; i++ ) {
		console.log(this.cells[i]);
	}
};

Board.prototype.play = function(col) {
	for ( var row = 0; row < this.cells.length; row++) {
		var currentRow = this.cells[row];
		var setMove = [row, parseInt(col)];
		if ( currentRow[col].isEmpty() ) {
				currentRow[col].setValue(this.currentPlayer)
				if ( this.currentPlayer === "R" ) {
					this.currentPlayer = "B";
					console.log("R Set");
					return setMove;
				} else {
					this.currentPlayer = "R";
					 console.log("Y Set");
					 return setMove;
				}
		} else {
			console.log("trying next row");
		}
	}
};

Board.prototype.checkColumns = function() {
	var currentColumns = [];
	for ( var col = 0; col < 7; col++) {
		currentColumns.push([])
		for ( var i = 0; i < this.cells.length; i++ ) {
			var value = this.cells[i][col].value;
			currentColumns[col].push(value)
		}
	}

	for ( var i = 0; i < currentColumns.length; i++ ) {
		if ( currentColumns[i].join('').indexOf('RRRR') != -1 ) {
			this.winner = true;
			console.log("R WON!")
			return true;
		} else if ( currentColumns[i].join('').indexOf('BBBB') != -1 ) {
			this.winner = true;
			console.log("Y WON!")
			return true;
		} else {
		console.log("no winner in this column");
		}
	}
};

Board.prototype.checkRows = function() {
	// //should check all the rows for 4 in a row
	var currentRow = [];
	for ( var row = 0; row < this.cells.length; row++ ) {
		currentRow.push([]);
		for ( var col = 0; col < this.cells[row].length; col++ ) {
			currentRow[row].push(this.cells[row][col].getValue())
		}
	}

	for ( var i = 0; i < currentRow.length; i++ ) {
		if ( currentRow[i].join('').indexOf('RRRR') != -1 ) {
			this.winner = true;
			console.log("R WON!")
			return true;
		} else if ( currentRow[i].join('').indexOf('BBBB') != -1 ) {
			this.winner = true;
			console.log("Y WON!")
			return true;
		} else {
			console.log("no winner this row")
		}
	}
};

Board.prototype.checkDiagonals = function() {

};

Board.prototype.checkWin = function() {
	this.checkColumns();
	this.checkDiagonals();
	this.checkRows();
};

Board.prototype.makeCells = function() {
	for ( var i = 0; i < 6; i++) {
		this.cells.push([])
		for ( var cell = 0; cell < 7; cell++ ) {
			this.cells[i].push(new Cell())	
		}
	}
};