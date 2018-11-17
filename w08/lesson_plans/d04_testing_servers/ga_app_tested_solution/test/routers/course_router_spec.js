var expect    = require('chai').expect,
    request   = require('request');

describe('course router', function() {

  var server;
  var baseURL = 'http://localhost:9888';

  describe('GET /courses', function() {
    it('should return status 200', function(done) {
      request({
        uri: baseURL + '/courses',
        method: 'GET'
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an array of courses', function(done) {
      request({
        uri: baseURL + '/courses',
        method: 'GET'
      },
      function(error, response, body) {
        var courses = JSON.parse(body);
        expect(courses instanceof Array).to.equal(true);
        done();
      });
    });
  });

  describe('GET /courses/empty', function() {
    it('should return status 200', function(done) {
      request({
        uri: baseURL + '/courses/empty',
        method: 'GET'
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an array', function(done) {
      request({
        uri: baseURL + '/courses/empty',
        method: 'GET'
      },
      function(error, response, body) {
        var courses = JSON.parse(body);
        expect(courses instanceof Array).to.equal(true);
        done();
      });
    });
  });

  describe('GET /courses/:id', function() {
    it('should return status 200', function(done) {
      request({
        uri: baseURL + '/courses',
        method: 'GET'
      },
      function(error, response, body) {
        var courses = JSON.parse(body);
        var course = courses[0];
        request({
          uri: baseURL + '/courses/' + course.id,
          method: 'GET'
        },
        function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
    });

    it('should return an object', function(done) {
      request({
        uri: baseURL + '/courses',
        method: 'GET'
      },
      function(error, response, body) {
        var courses = JSON.parse(body);
        var course = courses[0];
        request({
          uri: baseURL + '/courses/' + course.id,
          method: 'GET'
        },
        function(error, response, body) {
          var course = JSON.parse(body);
          expect(course instanceof Object).to.equal(true);
          done();
        });
      });
    });
  });
});
