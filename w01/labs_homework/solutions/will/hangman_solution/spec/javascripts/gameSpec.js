describe("Is this working", function() {
    it("should work", function() {
        expect(true).toEqual(true);
    });
});


describe("Game", function() {
	
	beforeEach(function() {
		game.startGame(['hello'])
	});

	//Guesses
	it('should should have guesses', function() {
		expect(game.guesses).toBeDefined();
	});

	//Guessed Letters
	it('should have guessed letters', function() {
		expect(game.guessedLetters).toBeDefined();
	});

	//Words
	it('should have words', function() {
		expect(game.words).toBeDefined();
	});

	//Current Word
	it('should have a current word property', function() {
		expect(game.currentWord).toBeDefined();
	});

	//Start Game
	describe('startGame', function() {
		
		it('should set guesses to 10', function() {
			expect(game.guesses).toEqual(10);
		});

		it('should empty the guessed letters array', function() {
			expect(game.guessedLetters.length).toEqual(0)
		});

		it('should set the current word to a word object', function() {
			expect(game.currentWord.letters.length).toEqual(5)
		});

		it('should put all incoming words into words array', function() {
			expect(game.words.length).toEqual(1);
		});
	});

	describe('guess', function() {
			
		it('should lower guesses by 1 if letter was not found', function() {
			game.guess('p');
			expect(game.guesses).toEqual(9);
		});

		it('should put the letter into guessed letters', function() {
			game.guess('p');
			expect(game.guessedLetters.length).toEqual(1);
		});

	});

	describe('isOver', function() {

		it('should return true is guesses is 0', function() {
			game.guesses = 0;
			expect(game.isOver()).toEqual(true);
		});

		it('should return true if word is guessed', function() {
			game.guess('h');
			game.guess('e');
			game.guess('l');
			game.guess('l');
			game.guess('o');
			expect(game.isOver()).toEqual(true);
		});
		
	});

	describe('overMessage', function() {
		
		it('should return You Lose if guesses is 0', function() {
			game.guesses = 0;
			expect(game.overMessage()).toEqual("You Lose")
		});

		it('should return You Win if the word is found', function() {
			game.guess('h');
			game.guess('e');
			game.guess('l');
			game.guess('l');
			game.guess('o');
			expect(game.overMessage()).toEqual("You Win")
		});
	});

	describe('render', function() {
		
		it('should return the current state of the board', function() {
			var string = game.render();
			expect(string.indexOf('Guesses: 10') > -1).toEqual(true);
			expect(string.indexOf('Guessed letters:') > -1).toEqual(true);
		});



	});




});


