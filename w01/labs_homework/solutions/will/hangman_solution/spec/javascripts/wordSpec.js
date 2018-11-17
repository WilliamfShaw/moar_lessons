describe("Is this working", function() {
	it("should work", function() {
		expect(true).toEqual(true);
	});
});

describe('Word', function() {
	beforeEach(function() {
		newWord = word();
	});

	//Letters
	it("should have letters", function() {
		expect(newWord.letters).toBeDefined();
	});

	//Get Letters
	describe('getLetters', function() {
		it('should put letters into letter array', function() {
			newWord.getLetters("Hangman");
			expect(newWord.letters.length).toEqual(7)
		});
	});

	//Is Found
	describe('isFound', function() {
		
	});

	//Try
	describe('try', function() {
		it('should return true if a letter was found', function() {
				newWord.getLetters("Hangman");
				expect(newWord.try("a")).toEqual(true);
		});		
		it('should return false if a letter was not found', function() {
				newWord.getLetters("Hangman");
				expect(newWord.try("f")).toEqual(false);
		});
	});		

	//Render
	describe('render', function() {
		it('should return the current status of letters', function() {
			newWord.getLetters("Hangman");
			newWord.try("a");
			expect(newWord.render()).toEqual(" _ a _  _  _ a _ ")
		});
	});

});