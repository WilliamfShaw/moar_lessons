var board = {
  grid: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],

  play: function(player, position) {
    if (this.grid[position] === ' ') {
      this.grid[position] = player;
      return true;
    }

    return false;
  },

  render: function() {
    return this.grid[0] + " | " + this.grid[1] + " | " + this.grid[2] + "\n-----------\n " +
           this.grid[3] + " | " + this.grid[4] + " | " + this.grid[5] + "\n-----------\n " +
           this.grid[6] + " | " + this.grid[7] + " | " + this.grid[8];
  }
};

var game = {

  currentPlayer: 'X',

  board: board,

  turn: function() {
    console.log(this.board.render());
    var position = parseInt(prompt('What position? (0-8)'));
    this.play(position);
  },

  play: function(position) {
    var successfulMove = this.board.play(this.currentPlayer, position);
    if (successfulMove) {
      this.togglePlayer();
    }
  },

  togglePlayer: function() {
    if (this.currentPlayer = 'X') {
      this.currentPlayer = 'O';
    } else {
      this.currentPlayer = 'X';
    }
  }
};
