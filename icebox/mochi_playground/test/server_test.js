var assert = require('chai').assert;
var server = require('../server');
var http = require('http');


describe('Server', function() {
	before(function () {
	  server.listen(3000);
	});
	var baseURL = 'http://localhost:3000/';

	describe('/home', function() {
		it('should return status 200', function(done) {
			http.get( baseURL + 'home', function(res) {
				assert.equal(200, res.statusCode);
				done()
			});
		});

		it('should return Hello World', function(done) {
			http.get(baseURL + 'home', function(res) {
				res.on('data', function(body) {
					assert.equal('Hello World', body)
					done();
				});
			});
		});
	});

	describe('/an_array', function() {

		it('should return an array', function(done) {
			http.get(baseURL + 'an_array', function(res) {
				res.on('data', function(body) {
					var response = JSON.parse(body);
					assert.isArray(response);
					done();
				});
			});
		});

		it("should have a length of 3", function(done) {
			http.get(baseURL + 'an_array', function(res) {
				res.on('data', function(body) {
					var response = JSON.parse(body);
					assert.lengthOf(response, 3);
					done();
				});
			})
		});
	});

	describe('/an_object', function() {

		it("should return an object", function(done) {
			http.get(baseURL + 'an_object', function(res) {
				res.on('data', function(body){
					var response = JSON.parse(body);
					assert.isObject(response);
					done();
				});
			});
		});

		it('should have a name', function(done) {
			http.get(baseURL + 'an_object', function(res) {
				res.on('data', function(body) {
					var response = JSON.parse(body);
					assert.property(response, 'name');
					done();
				});
			});
		});
	});
});


