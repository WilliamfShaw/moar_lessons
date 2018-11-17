console.log("loaded bro");

var board = {
  cell: [],
  moves: [],
  winner: false,
  startGame:  function() {
    this.cell = ["| |", "| |", "| |", "| |", "| |", "| |", "| |", "| |", "| |"];
    this.moves = ["|X|", "|O|", "|X|", "|O|", "|X|", "|O|", "|X|", "|O|", "|X|"];
    this.numMoves = 9;
  },
  render: function() {
    console.log(this.cell[0] + this.cell[1] + this.cell[2] + "\n "
      + this.cell[3] + this.cell[4] + this.cell[5] + "\n "
      + this.cell[6] + this.cell[7] + this.cell[8]);
  },
  isPlayable: function(position) {
    if (this.cell[position] === '| |') {
      return true
    } else {
      return false
    }
  },
  makePlay: function() {
   var position = prompt("Choose a square 0-8")
   if (this.isPlayable(position)) {
    this.cell[position] = this.moves.shift();
  } else {
    alert("Square not available!")
  }
},
checkRows: function() {
  var row1 = this.cell[0] + this.cell[1] + this.cell[2];
  var row2 = this.cell[3] + this.cell[4] + this.cell[5];
  var row3 = this.cell[6] + this.cell[7] + this.cell[8];
  if (row1 === '|X||X||X|' || row2 === '|X||X||X|' || row3 === '|X||X||X|') {
   this.winner = true;
   alert("X is the winner!")
 } else if (row1 === '|O||O||O|' || row2 === '|O||O||O|' || row3 === '|O||O||O|') {
   this.winner = true;
   alert("O is the winner!")
 }
},
checkColumns: function() {
  var col1 = this.cell[0] + this.cell[3] + this.cell[6];
  var col2 = this.cell[1] + this.cell[4] + this.cell[7];
  var col3 = this.cell[2] + this.cell[5] + this.cell[8];
  if (col1 === '|X||X||X|' || col2 === '|X||X||X|' || col3 === '|X||X||X|') {
   this.winner = true;
   alert("X is the winner!")
 } else if (col1 === '|O||O||O|' || col2 === '|O||O||O|' || col3 === '|O||O||O|') {
   this.winner = true;
   alert("O is the winner!")
 }
},
checkDiagonals: function() {
  var diag1 = this.cell[0] + this.cell[4] + this.cell[8];
  var diag2 = this.cell[2] + this.cell[4] + this.cell[6];
  if (diag1 === '|X||X||X|' || diag2 === '|X||X||X|') {
   this.winner = true;
   alert("X is the winner!")
 } else if (diag1 === '|O||O||O|' || diag2 === '|O||O||O|') {
   this.winner = true;
   alert("O is the winner!")
 }
},
checkWin: function() {
  this.checkRows();
  this.checkColumns();
  this.checkDiagonals();
  this.render();
}
};

var game = {
  play: function() {
    board.startGame();
    while ( board.winner != true ){
      board.makePlay();
      board.checkWin();
    }
  }
}
