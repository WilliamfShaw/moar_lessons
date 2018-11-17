var game = {
	play: function(column) {
		var columnNumber = parseInt(column[7])
		var row = this.board.play(columnNumber);
		if (row !== -1) {
			this.render(column, 5 - row);
			this.board.checkWin();
		}
	},
	startGame:  function() {
		this.board = new Board;
		this.board.createCells();
		this.listen();
	},
	render: function(col, row) {
		var column = '#' + col + ' .circle';
		var playerClass;
		(this.board.currentPlayer == -1) ? playerClass = 'player1' : playerClass = 'player2';
		//the player class changes the color in my style.css
		$(column).eq(row).addClass(playerClass);
	},
	listen: function() {
		$('.column').on('click', function() {
			// use the vanillaJS .id because it is a little simpler
			// than the jQuery .attr('id')
			game.play(this.id);
		})
	}
};