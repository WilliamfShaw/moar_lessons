var expect = require('chai').expect;
var User = require('../models').users;

describe('User', function() {
	var nullUser;
	var invalidUser;
	var validUser;

	context('null user', function() {
		beforeEach('build null user', function() {
			nullUser = User.build();
		});

		it("should validate the presence of name", function(done) {
			nullUser
				.validate()
				.then(function(err) {
					var error_fields = err.errors.map(function(error) { return error.path });
					expect(error_fields).to.include('name');
					done();
				});
		});

		it("should validate the presence of email", function(done) {
			nullUser
				.validate()
				.then(function(err) {
					var error_fields = err.errors.map(function(error) { return error.path });
					expect(error_fields).to.include('email');
					done();
				});
		});

		it("should validate the presence of age", function(done) {
			nullUser
				.validate()
				.then(function(err) {
					var error_fields = err.errors.map(function(error) { return error.path });
					expect(error_fields).to.include('age');
					done();
				});
		});

		it('should validate the presence of all attributes', function(done) {
			nullUser
				.validate()
				.then(function(err) {
					var error_types = err.errors.forEach(function(error) {
						expect(error.type).to.equal('notNull Violation');
					});
					done();
				});
		});
	});

	context('invalid user', function() {
		beforeEach('build invalid user', function() {
			invalidUser = User
				.build({
					name: 'smaug roller',
					email: 'as.c',
					photo_url: 'http:/gip.com',
					age: 160,
					state: 'NYS',
					birthdate: 'May 15, 1890',
					hometown: 'Mars 2112',
					favorite_food: ''
				})
		});

		it('should validate alphabetical nature of the name', function(done) {
			invalidUser
				.validate()
				.then(function(err) {
					var error = err.errors.filter(function(error) { return error.path === 'name'; })[0];
					expect(error.message).to.equal('Letters only please.');
					done();
				});
		});

		it('should validate email address', function(done) {
			invalidUser
				.validate()
				.then(function(err) {
					var error = err.errors.filter(function(error) { return error.path === 'email'; })[0];
					expect(error.message).to.equal('Not a valid email address');
					done();
				})
		});
	});

	context('valid user', function() {
		beforeEach('build valid user', function() {
			validUser = User
				.build({
					name: 'smaug',
					email: 'a@b.c',
					photo_url: 'http://giphy.com',
					age: 40,
					state: 'TX',
					birthdate: 'May 15, 1895',
					hometown: 'Mars',
					favorite_food: 'cheese fingers'
				});
		});

		it("should not have any errors", function(done) {
			validUser
				.validate()
				.then(function(err) {
					expect(err).to.be.undefined;
					done();
				});
		});

		it("should have an active value of true", function(done) {
			validUser
				.validate()
				.then(function(err, user) {
					expect(validUser.get('active')).to.be.true;
					done();
				});
		});
	});

});