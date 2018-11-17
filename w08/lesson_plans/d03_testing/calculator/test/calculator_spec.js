var expect = require('chai').expect;
var calculator = require('../calculator.js');

describe("calculator", function() {

	describe("add", function() {
		it("should add two numbers", function() {
			var assertion = calculator.add(1,1);
			expect(assertion).to.equal(2);
		});
		it("should work when no numbers are given", function() {
			var assertion = calculator.add();
			expect(assertion).to.equal(0);
		});

		it("should only add the first two numbers", function() {
			var assertion = calculator.add(1,2,3,4);
			expect(assertion).to.equal(3);
		});

		it("should work for negative numbers", function() {
			var assertion = calculator.add(-1, -2);
			expect(assertion).to.equal(-3);
		});
	});

	describe("subtract", function() {
		it("should subtract two numbers", function() {
			var assertion = calculator.subtract(2,1);
			expect(assertion).to.equal(1);
		});

		it("should work when no numbers are given", function() {
			var assertion = calculator.subtract();
			expect(assertion).to.equal(0);
		});

		it("should only subtract the first two numbers", function() {
			var assertion = calculator.subtract(1,2,3,4);
			expect(assertion).to.equal(-1);
		});

		it("should work for negative numbers", function() {
			var assertion = calculator.subtract(1,-2);
			expect(assertion).to.equal(3);
		});
	});

	describe("multiply", function() {
		it("should multiply two numbers", function() {
			var assertion = calculator.multiply(2,3);
			expect(assertion).to.equal(6);
		});

		it("should work for no numbers", function() {
			var assertion = calculator.multiply();
			expect(assertion).to.equal(0);
		});

		it("should work for negative values", function() {
			var assertion = calculator.multiply(1,-3);
			expect(assertion).to.equal(-3);
		});
	});

	describe("divide", function() {
		it("should divide two numbers", function() {
			var assertion = calculator.divide(6,3);
			expect(assertion).to.equal(2);
		});

		it("should not divide by zero", function() {
			var assertion = calculator.divide(9,0);
			expect(assertion).to.equal(0);
		});

		it("should work for negative numbers", function() {
			var assertion = calculator.divide(3,-1);
			expect(assertion).to.equal(-3);
		});
	});

	describe("factorial", function() {
		it("should calculate factorial values", function(){
			var assertion = calculator.factorial(5);
			expect(assertion).to.equal(120);
		});

		it("should ignore more than one number", function() {
			var assertion = calculator.factorial(5,4,3);
			expect(assertion).to.equal(120);
		});

		it("should work for 0", function() {
			var assertion = calculator.factorial(0)
			expect(assertion).to.equal(1)
		});
	});

	describe("abs", function() {
		it("should work for positive numbers", function() {
			var assertion = calculator.abs(5)
			expect(assertion).to.equal(5);
		});

		it("should work for negative numbers", function() {
			var assertion = calculator.abs(-5);
			expect(assertion).to.equal(5);
		});
	});

});