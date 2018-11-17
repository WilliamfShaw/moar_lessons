var game = {
    board: new Board(),
    startGame: function() {
        this.board.makeCells();
        this.board.currentPlayer = "R";

    },
    play: function(col) {
        this.board.play(col);
    },
    render: function() {
        //go to  array index render each piece 
        for (var row = 0; row < this.board.cells.length; row++) {
            for (var col = 0; col < 7; col++) {
            	var id = row.toString() + col.toString()
            	var cell = $('#' + id)
            	var value = this.board.cells[row][col].value
            	if ( value === "R" ) {
            		cell.css('background-color', 'red')
            		console.log("should be red")
            	} else if ( value === "B" ) {
            		cell.css('background-color', 'yellow')
            		console.log("should be yellow")
            	} 
            }
        }
    }
};