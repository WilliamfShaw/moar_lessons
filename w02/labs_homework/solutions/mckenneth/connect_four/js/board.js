var Board = function(){
	this.cells = null;
	this.winner = null;
	this.currentPlayer = 1;
};

Board.prototype.fill = function() {
	this.cells = [];
	for(var i = 0; i < 7; i++) {
		var column = [];
		for (var j = 0; j < 6; j++) {
			var newCell = new Cell;
			column.push(newCell);
		}
		this.cells.push(column);
	}
};

Board.prototype.play = function(col) {
	var column = this.cells[col];
	for( var i = 0; i < column.length; i++) {
		var cell = column[i];
		if(cell.isEmpty()) {
			cell.value = this.currentPlayer;
			this.currentPlayer *= -1;
			return i;
		}
	}
	return -1;
};

Board.prototype.checkColumns = function() {
	for(var i = 0; i < this.cells.length; i++) {
		var cellValues = this.cells[i].map(function(cell) { return cell.getValue(); }).join('');
		if( this.isWinningSet( cellValues ) ) { return true; }
	}
	return false;
};

Board.prototype.checkRows = function() {
	var rows = [];
	for (var i = 0; i < 6; i++) {
		rows.push('');
		for( var j = 0; j < 7; j++) {
			rows[i] += this.cells[j][i].getValue();
		}
		if ( this.isWinningSet(rows[i]) ) { return true; }
	}
	return false;
};

Board.prototype.checkDiagonals = function() {
	// separate board into rows
	var allCells = [];
	for (var i = 0; i < 6; i++) {
		for( var j = 0; j < 7; j++) {
			allCells.push(this.cells[j][i].getValue());
		}
	}

	// check diagonal going forward
	for (var i = 0; i < 4; i++) {
    var firstSet = [allCells[0 + i], allCells[8 + i], allCells[16 + i], allCells[24 + i]].join('');
    var secondSet = [allCells[7 + i], allCells[15 + i], allCells[23 + i], allCells[31 + i]].join('');
    var thirdSet = [allCells[14 + i], allCells[22 + i], allCells[30 + i], allCells[38 + i]].join('');
    if (this.isWinningSet(firstSet))  { console.log(firstSet,'a'); return true; }
  	if (this.isWinningSet(secondSet)) { console.log(secondSet,'b'); return true; }
   	if (this.isWinningSet(thirdSet))  { console.log(thirdSet),'c'; return true; }
  }
  // Check diagonal going backward
  for (var i = -3; i < 1; i++) {
    var firstSet = [allCells[6 + i], allCells[12 + i], allCells[18 + i], allCells[24 + i]].join('');
    var secondSet = [allCells[13 + i], allCells[19 + i], allCells[25 + i], allCells[31 + i]].join('');
    var thirdSet = [allCells[20 + i], allCells[26 + i], allCells[32 + i], allCells[38 + i]].join('');
    if (this.isWinningSet(firstSet))  { return true; }
  	if (this.isWinningSet(secondSet)) { return true; }
   	if (this.isWinningSet(thirdSet))  { return true; }
  }

	return false;
};

Board.prototype.isWinningSet = function(set) {
	return set.match(/[^-]1111/) || set.match(/-1-1-1-1/);
};

Board.prototype.checkAll = function() {
	if (this.checkRows() || this.checkColumns() || this.checkDiagonals() ) { return this.currentPlayer * -1; }
};