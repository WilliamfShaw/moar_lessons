describe("Is this working", function() {
	it("should work", function() {
		expect(true).toEqual(true);
	});
});

describe("Letter", function() {

	beforeEach(function () {
		newLetter = letter("a");
	});

	//Value
	it("should have a value", function() {
		expect(newLetter.value).toBeDefined();
	});

	//Hidden
	it("hidden should have a default of true", function() {
		expect(newLetter.hidden).toBe(true);
	});

	//Hide
	describe("hide", function() {
		it("should should set hidden to true", function() {
			newLetter.hide();
			expect(newLetter.hidden).toEqual(true);
		})
	});

	//Show
	describe('show', function() {
		it('should set hidden to false', function() {
			newLetter.show();
			expect(newLetter.hidden).toEqual(false);
		});
	});

	//Render
	describe('render', function() {
		it("should return _ if hidden is true", function() {
			newLetter.hidden = true;
			expect(newLetter.render()).toEqual(" _ ");
		})
		it("should return the letter if hidden is false", function() {
			newLetter.hidden = false;
			expect(newLetter.render()).toEqual("a");
		})
	});
});
