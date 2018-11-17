var expect = require('chai').expect;

describe("first test", function() {
	it("should work", function() {
		var assertion = 1 + 1;
		var actual = 2;

		expect(assertion).to.equal(actual);
	});
	it("should not work", function() {
		var assertion = 1 + 1;
		var actual = 3;

		expect(assertion).to.equal(actual);
	});
});