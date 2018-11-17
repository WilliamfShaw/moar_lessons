console.log("loaded bro");

var word = function () {
	var newWord = {
		letters: [],
		getLetters: function (newWord) {
			var chars = newWord.split('');
			for( var i = 0; i < chars.length; i++ ){
				this.letters.push(letter(chars[i]));
			};
		},
		isFound: function() {
 			 return this.letters.every(function(currentLetter) {
    		return !currentLetter.hidden;
  		});
		},
		try: function (letter) {
			var found = false;
			for ( var i = 0; i < this.letters.length; i++ ) {
				if ( this.letters[i].value === letter ) {
					this.letters[i].show();
					found = true;
				}
			};
			return found;
		},
		render: function () {
			return this.letters.map( function(letter) {
				return letter.render();
			}).join('');
		}
	};
	return newWord
};





















