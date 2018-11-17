$(function () {

  var button = $('<button>').text("Start Game");
    $('body').append(button);
    $('div').hide();
   

    $('button').on('click', function() {
        $('div').slideDown(1000);
        $('button').hide();
        game.start()
        playerTurn = $('<div>').text("Your turn - X" )
       $('body').append(playerTurn);
    })
	

    $('.cell').on('click', function() {
        var cell = $(this).closest('.cell');
        var cellNum = $(this).closest('.cell').attr('id');
        var value = parseInt(cellNum);
        var currentPlayer = board.moves % 2 === 0 ? 'O' : 'X';
        game.play(value);
        cell.text(board.cells[value][0]);
        playerTurn.text("Your turn - " + currentPlayer)
        if(board.moves % 2 === 0){
        $(this).css("color", "red")}
    });
});