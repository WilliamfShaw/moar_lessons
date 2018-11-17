console.log("loaded bro");

var word = function () {
	var newWord = {
		letters: [],
		getLetters: function (newWord) {
			var chars = newWord.split('');
			for( var i = 0; i < chars.length; i++ ){
				this.letters.push(letter(chars[i]));
				// no semi after for
			};
		},
		isFound: function () {
			return this.letters.every(function(currentLetter) {
				return !currentLetter.hidden;
			});
		},
		try: function (letter) {
			// you never use found
			var found = false;
			for ( var i = 0; i < this.letters.length; i++ ) {
				if ( this.letters[i].value === letter ) {
					this.letters[i].show();
				}
				// no semi after for
			};
		},
		render: function () {
			// consider not using `map` (just push into an empty array)
			// var values = [];
			// for (var i = 0; i < this.letters.length; i++) {
			// 	values.push(this.letters[i].render());
			// }
			// return values.join('');

			return this.letters.map( function(letter) {
				return letter.render();
			}).join('');
		}
	};
	return newWord
};
