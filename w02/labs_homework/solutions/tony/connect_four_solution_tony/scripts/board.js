var Board = function() {
	this.cells = [];
	this.currentPlayer = "1";
	this.winner = null;
	// I created a Board property that keeps the two possible winning combos in order to chekc against them for winners.
	this.winners = ['1111', '-1-1-1-1']
};

Board.prototype.createCells = function(first_argument) {
	for (var columns = 0; columns < 7; columns++) {
		var column = [];
		for (var rows = 0; rows < 6; rows++) {
			column.push(new Cell);
		}
		this.cells.push(column);
	}
};

Board.prototype.getCell = function(column, row) {	
	//Helper method because I thought it was cleaner than cells[column][row]
	return this.cells[column][row];
};

Board.prototype.getColumn = function(col) {
	//same as above
	return this.cells[col];
};

Board.prototype.play = function(column) {
	var playCol = this.getColumn(column);
	for (var row = 0; row < playCol.length; row++) {
		if (playCol[row].isEmpty()) {
			playCol[row].setValue(this.currentPlayer);
			return row;
		}
	}
	return -1;
};

Board.prototype.switchPlayer = function(first_argument) {
	// Toggler between players 1 and -1 (player 2)
	this.currentPlayer *= -1;
	this.currentPlayer = this.currentPlayer.toString();
};

Board.prototype.checkWin = function() {
	// Function that checks everything.
	if (this.checkColumns() || this.checkRows() || this.checkDiagnols()) {
		this.winner = this.currentPlayer;
		alert(this.winner + " has won!");
		return 1;
	}
	this.switchPlayer();
	return -1;
};

Board.prototype.checkColumns = function() {
	for (var i = 0; i < this.cells.length; i++) {
		//check every colummn, make map their containing Cell Objects to
		//an array of their cell.getValue() values, then join that array,
		//to get a string
		var colString = this.cells[i].map(
			function(cell) {
				return cell.getValue();
			}
		).join('');
		//then compare the resulting string to the winners
		if (
				(colString.indexOf(this.winners[0]) > -1) || 
				(colString.indexOf(this.winners[1]) > -1)
			)
		{
			return true;
		}
	}
	return false;
};

Board.prototype.checkRows = function() {
	//look across every row, across all columns
	for (var i = 0; i < 6; i++) {
		var rowString = '';
		for (var j = 0; j < 7; j++) {
			rowString += this.getCell(j, i).getValue();
		}
		if (
				(rowString.indexOf(this.winners[0]) > -1) ||
				(rowString.indexOf(this.winners[1]) > -1)
		)
		{
			return true;
		}
	}
	return false;
};

Board.prototype.checkDiagnols = function() {
	//these are starting cell (column, row) pairs in the northwest corner of the board, and
	//check for diagnols going southeast.
	var nwSE = [
		[[0,2], [3,0]], [[0,1], [2,0]], [[0,0], [1,0]]
	];
	//same as above but moving from SW to NE; 
	var swNE = [
		[[0,3], [3,5]], [[0,4], [2,5]], [[0,5], [1,5]]
	];
	for (var i = 0; i < nwSE.length; i++) {
		var sideString = '';
		var topString = '';
		//similar as columns and rows, building a string to compare against winners.
		for (var j = 0; j < (4 + i); j++) {
			sideString += this.getCell(nwSE[i][0][0] + j, nwSE[i][0][1] + j).getValue();
			topString += this.getCell(nwSE[i][1][0] + j, nwSE[i][1][1] + j).getValue();
		}
		if (
				(sideString.indexOf(this.winners[0]) > -1) ||
				(sideString.indexOf(this.winners[1]) > -1) ||
				(topString.indexOf(this.winners[0]) > -1) ||
				(topString.indexOf(this.winners[1]) > -1)
		)
		{
			return true;
		}
	}
	for (var i = 0; i < swNE.length; i++) {
		var sideString = '';
		var bottomString = '';
		for (var j = 0; j < (4 + i); j++) {
			sideString += this.getCell(swNE[i][0][0] + j, swNE[i][0][1] - j).getValue();
			bottomString += this.getCell(swNE[i][1][0] + j, swNE[i][1][1] - j).getValue();
		}
		if (
				(sideString.indexOf(this.winners[0]) > -1) ||
				(sideString.indexOf(this.winners[1]) > -1) ||
				(bottomString.indexOf(this.winners[0]) > -1) ||
				(bottomString.indexOf(this.winners[1]) > -1)
		)
		{
			return true;
		}
	}
	return false;
};
