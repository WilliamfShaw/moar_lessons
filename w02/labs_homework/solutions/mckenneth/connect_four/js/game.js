var Game = function() {
	this.board = null;
};

Game.prototype.createBoard = function() {
	var game = this;
	$('#gameboard-container').empty()
													 .off();
	for (var i = 0; i < 7; i++) {
		var column = $('<div>').addClass('column')
													 .attr('id', i);
		for (var j = 0; j < 6; j++) {
			$('<div>').addClass('circle')
								.data('column', i)
								.appendTo(column);
		}
		column.appendTo('#gameboard-container');
		$('.circle').hide()
								.delay(i * 30)
								.fadeIn(600);
	}

	$('#gameboard-container').on('click', '.circle', function() {
		var thisColumn = $(this).data('column');
		game.play(thisColumn);
	});
};

Game.prototype.start = function() {
	this.board = new Board();
	this.createBoard();
	this.board.fill();
};
Game.prototype.play = function(col) {
	var winner;
	var played = this.board.play(col);
	this.render(played, col);
	if (winner = this.board.checkAll()) {
		alert('Winner!' + (winner === 1 ? ' Red is Victorious' : ' Black is Victorious'));
		this.start();
	}
	return played;
};

Game.prototype.render =  function(play, col) {
	var columnPieces = $('#' + col).children().reverse();

	if (play !== -1) { this.board.currentPlayer === -1 ? columnPieces.eq(play).addClass('red') : columnPieces.eq(play).addClass('black') };
};