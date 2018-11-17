$(function () {
	
	var board = $("#board")
	for ( var col = 0; col < 7; col++ ) {
	var rows = $("<div>").addClass("row")
		for ( var row = 5; row >= 0; row--) {
			var cell = $("<div>").addClass('cell').attr("id", row.toString() + col.toString()).css({border_radius: "50px", background: "black",  height: "100px", width: "100px", borderRadius: "50px", marginTop: "10px" })
			rows.append(cell)
		}
	board.append(rows)
	}

	game.startGame()

	$('.cell').on('click', function () {
		var cell = $(this).closest('.cell');
		var cellValue = cell.attr('id').split('');
		var colNum = cellValue[1]
		var rowNum = cellValue[0]
		game.play(colNum)
		game.board.info()
		game.render();
		game.board.checkWin()
		console.log("clicked bro" + cellValue)
	})

});

