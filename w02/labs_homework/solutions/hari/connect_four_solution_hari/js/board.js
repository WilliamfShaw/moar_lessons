var Board = function() {
  this.rows = 6;
  this.cols = 7;

  this.reset();
};

// Reset the board to an empty state to start new game
Board.prototype.reset = function() {
  this.cells = [];
  for (var row = 0; row < this.rows; row++) {
    var rowOfCells = []
    for (var col = 0; col < this.cols; col++) {
      rowOfCells.push(new Cell());
    }
    this.cells.push(rowOfCells);
  }

  this.currentPlayer = 1;
  this.winner = null;
};

// Getter method for the value of the cell at the position [row, col]
// If the row or col value is out of bounds, then this method returns 0 (empty)
Board.prototype.cellValue = function(row, col) {
  var rowOfCells = this.cells[row] || [];
  var cell = rowOfCells[col] || new Cell();
  return cell.getValue();
};

// Returns an array of 42 cell values
Board.prototype.info = function() {
  var cellValues = [];

  for (var row = 0; row < this.rows; row++) {
    for (var col = 0; col < this.cols; col++) {
      cellValues.push(this.cellValue(row, col));
    }
  }

  return cellValues;
};

// Makes a play in the indicated column
// Returns true if play was made
// Returns false if play was not made (column was full)
Board.prototype.play = function(col) {
  var playMade = false;

  for (var row = this.rows - 1; row >= 0; row--) {
    var cell = this.cells[row][col];
    if (cell.isEmpty()) {
      cell.setValue(this.currentPlayer);
      this.currentPlayer = 3 - this.currentPlayer; // toggle between player 1 & 2
      playMade = true;
      break;
    }
  }

  return playMade;
};

// Returns true or false based on whether a winner exists
Board.prototype.checkWin = function() {
  return this.checkRows() || this.checkCols() || this.checkDiags();
};

// Returns true or false based on whether a row winner exists
Board.prototype.checkRows = function() {
  for (var row = 0; row < this.rows; row++) {
    var rowString = '';
    for (var col = 0; col < this.cols; col++) {
      rowString += this.cellValue(row, col);
    }
    if (this.findWinner(rowString)) {
      return true;
    }
  }
  return false;
};

// Returns true or false based on whether a column winner exists
Board.prototype.checkCols = function() {
  for (var col = 0; col < this.cols; col++) {
    var colString = '';
    for (var row = 0; row < this.rows; row++) {
      colString += this.cellValue(row, col);
    }
    if (this.findWinner(colString)) {
      return true;
    }
  }
  return false;
};

// Returns true or false based on whether a diagonal winner exists
Board.prototype.checkDiags = function() {
  // TOP-LEFT TO BOTTOM-RIGHT DIAGONALS
  // Iterate through the 6 possible diagonals
  // The first diagonal starts from the top row, column -2
  // The last diagonal starts from the top row, column 3
  for (var colStart = -2; colStart <= 3; colStart++) {
    var diagString = '';
    for (var row = 0, col = colStart; row < this.rows; row++, col++) {
      diagString += this.cellValue(row, col);
    }
    if (this.findWinner(diagString)) {
      return true;
    }
  }

  // TOP-RIGHT TO BOTTOM-LEFT DIAGONALS
  // Iterate through the 6 possible diagonals
  // The first diagonal starts from the top row, column 8
  // The last diagonal starts from the top row, column 3
  for (var colStart = 8; colStart >= 3; colStart--) {
    var diagString = '';
    for (var row = 0, col = colStart; row < this.rows; row++, col--) {
      diagString += this.cellValue(row, col);
    }
    if (this.findWinner(diagString)) {
      return true;
    }
  }
  return false;

};

// Accepts a string of cell values
// If it finds four 1's in a row, it sets the winner to 1 and returns true
// If it finds four 2's in a row, it sets the winner to 2 and returns true
// If it doesn't find four in a row, it returns false
Board.prototype.findWinner = function(piecesString) {
  if (piecesString.indexOf('1111') > -1) {
    this.winner = 1;
    return true;
  } else if (piecesString.indexOf('2222') > -1) {
    this.winner = 2;
    return true;
  }
  return false;
};
