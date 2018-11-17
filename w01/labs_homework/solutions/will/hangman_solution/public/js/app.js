console.log("loaded bro");

var words = [
  'javascript',
  'closure',
  'function',
  'scope',
  'variable',
  'semicolon',
  'jasmine'
];



game.startGame(words);
var playAgain = true;

while(playAgain) {
  while(!game.isOver()) {
    console.log(game.render());
    var input = prompt()[0];
    game.guess(input);
  }
  console.log(game.render());

  console.log("Play again?(Y/N)");
  var playAgainInput = prompt().toUpperCase();
  if (playAgainInput === 'Y') {
    game.startGame(words);
  } else {
    playAgain = false;
  }
}