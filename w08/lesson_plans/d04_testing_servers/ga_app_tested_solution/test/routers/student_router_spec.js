var expect    = require('chai').expect,
    request   = require('request');

describe('student router', function() {
  var server;
  var baseURL = 'http://localhost:9888';

  describe('GET /students', function() {
    it('should return status 200', function(done) {
      request({
        uri: baseURL + '/students',
        method: 'GET'
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an array of students', function(done) {
      request({
        uri: baseURL + '/students',
        method: 'GET'
      },
      function(error, response, body) {
        var students = JSON.parse(body);
        expect(students instanceof Array).to.equal(true);
        done();
      });
    });
  });

  describe('GET /students/:id/full_name', function() {
    it('should return status 200', function(done) {
      request(
      {
        uri: baseURL + '/students',
        method: 'GET'
      },
      function(error, response, body) {
        var students = JSON.parse(body);
        var student = students[0];
        request({
          uri: baseURL + '/students/' + student.id + '/full_name',
          method: 'GET'
        },
        function(error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        });
      });
    });
  });

  describe('GET /students/:id', function() {
    it('should return status 200', function(done) {
      request({
        uri: baseURL + '/students',
        method: 'GET'
      },
      function(error, response, body) {
        var students = JSON.parse(body);
        var student = students[0];
        request({
          uri: baseURL + '/students/' + student.id,
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
        uri: baseURL + '/students',
        method: 'GET'
      },
      function(error, response, body) {
        var students = JSON.parse(body);
        var student = students[0];
        request({
          uri: baseURL + '/students/' + student.id,
          method: 'GET'
        },
        function(error, response, body) {
          var student = JSON.parse(body);
          expect(student instanceof Object).to.equal(true);
          done();
        });
      });
    });
  });

  describe('POST /students', function() {
    it('should return a status of 200 for valid data', function(done) {
      request({
        uri: baseURL + '/students',
        method: 'POST',
        json: true,
        body: {
          first_name:'Timmy',
          last_name:'Jones',
          age: 21,
          email: 'timmy@jones.com'
        }
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return an object for valid data', function(done) {
      request({
        uri: baseURL + '/students',
        method: 'POST',
        json: true,
        body: {
          first_name:'Timmy',
          last_name:'Jones',
          age: 21,
          email: 'timmy@jones.com'
        }
      },
      function(error, response, body) {
        var student = body;
        expect(body instanceof Object).to.equal(true);
        done();
      });
    });

    it('should return a status of 422 for invalid data', function() {
      request({
        uri: baseURL + '/students',
        method: 'POST',
        json: true,
        body: {}
      },
      function(error, response, body) {
        expect(response.statusCode).to.equal(422);
        done();
      });
    });

  });
});
