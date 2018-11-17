var game = {
  board: new Board(),

  // Convert a cell id (0 - 41) to a column number, and call board.play()
  // Check for a winner after the play
  play: function(id) {
    this.board.play(id % 7);
    this.render();
    if (this.board.checkWin()) {
      alert(this.board.winner + ' wins!');
      this.board.reset();
      this.render();
    }
  },

  // Build the DOM board
  buildBoard: function() {
    var boardEl = $('#board');
    boardEl.empty();
    for (var i = 0; i < 42; i++) {
      $('<div class="cell">').attr('id', i).appendTo(boardEl);
    }
  },

  // Set up the event listener on cell clicks
  listen: function() {
    $('#board').on('click', '.cell', function() {
      game.play(parseInt(this.id));
    });
  },

  // Add appropriate classes to cells to represent filled and empty cells
  render: function() {
    var cellValues = this.board.info();
    for (var i = 0; i < cellValues.length; i++) {
      var cell = $('#' + i);
      if (cellValues[i] === 1) {
        cell.removeClass('yellow');
        cell.addClass('red');
      } else if (cellValues[i] === 2) {
        cell.removeClass('red');
        cell.addClass('yellow');
      } else {
        cell.removeClass('red');
        cell.removeClass('yellow');
      }
    }
  },

  // Start a game
  start: function() {
    this.buildBoard();
    this.listen();
  }
};
