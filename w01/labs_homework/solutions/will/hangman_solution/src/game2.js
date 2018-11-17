console.log("loaded bro");

var game = {
	guesses: null,
	guessedLetters: [],
	// why not set words equal to the words array passed in to the startGame function
	words: [],
	// why not set current word in startGame?
	currentWord: word(),
	startGame: function (wordsArray) {
		this.guesses = 10;
		this.guessedLetters = [];
		for( var i = 0; i < wordsArray.length; i++ ) {
			this.words.push(wordsArray[i]);
		};
		var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
		// why not pass the word constructor the randomWord and have the object return fully setup?
		this.currentWord.getLetters(randomWord);
	},
	guess: function (letter) {
		if ( this.guessedLetters.indexOf(letter) === -1 ) {
			var found = this.currentWord.try(letter);
			if (!found) {
				this.guesses--;
			}
			this.guessedLetters.push(letter);
		}
	},
	isOver: function () {
		return (this.guesses === 0) || (this.currentWord.isFound());
	},
	overMessage: function () {
		if ( this.guesses === 0 ) {
			return "You Lose"
		}
		// why not else if
		if ( this.currentWord.isFound() ) {
			return "You Win"
		}
		// why not just let it return undefined?
		return "";
	},
	render: function () {
		return [
    	this.currentWord.render(),
   	    "Guesses: " + this.guesses,
    	this.overMessage()
  		].join("\n");
	}
};