var expect = require('chai').expect
models = require('../models'),
Artist = models.artists,
Event = models.events,
Venue = models.venues;


describe('Events', function() {
  var nullEvent;
  var invalidEvent;
  var validEvent;

  context('null event', function() {
    beforeEach('build null event', function() {
      nullEvent = Event.build();
    });

    it("should validate the presence of name", function(done) {
      nullEvent
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('name');
          done();
        });
    });
  });

  context('invalid event', function() {
    beforeEach('build invalid event', function() {
      invalidEventA = Event.build({
        name: '',
        date: '',
        duration: '',
        venue_id: ''
      });

      invalidEventB = Event.build({
        name: 'Ball Game',
        date: 'Tomorrow',
        duration: '5 hours',
        venue_id: '2'
      });
    });

    it('should validate that name cannot be empty', function(done) {
      invalidEventA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'name';
          })[0];
          expect(error.message).to.equal('Name cannot be blank');
          done();
        });
    });

    it('should validate that date cannot be empty', function(done) {
      invalidEventA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'date';
          })[0];
          expect(error.message).to.equal('Date must be a valid date');
          done();
        });
    });

    it('should validate that duration is an Int', function(done) {
      invalidEventB
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'duration';
          })[0];
          expect(error.message).to.equal('Duration must be a number');
          done();
        });
    });
  });
  
  context('valid event', function() {
    beforeEach('build valid event', function() {
      validEvent = Event.build({
        name: 'Mets Game',
        date: '1/2/2015',
        duration: 3,
      });
    });


    it("should not have any errors", function(done) {
      validEvent
        .validate()
        .then(function(err) {
          expect(err).to.be.undefined;
          done();
        });
    });
  });
  



});