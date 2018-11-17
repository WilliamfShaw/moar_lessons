var expect = require('chai').expect
models = require('../models'),
Artist = models.artists,
Event = models.events,
Venue = models.venues;

describe('Venue', function() {
  var nullVenue;
  var invalidVenue;
  var validVenue;

  context('null venue', function() {
    beforeEach('build null venue', function() {
      nullVenue = Venue.build();
    });

    it("should validate the presence of name", function(done) {
      nullVenue
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('name');
          done();
        });
    });

    it("should validate the presence of address", function(done) {
      nullVenue
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('address');
          done();
        });
    });

    it("should validate the presence of city", function(done) {
      nullVenue
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('city');
          done();
        });
    });
  });

  context('invalid venue', function() {
    beforeEach('build invalid venue', function() {
      invalidVenueA = Venue.build({
        name: '',
        address: '',
        city: '',
        booking_manager: 'Deadmau5',
        capacity: 'potato'
      });

      invalidVenueB = Venue.build({
        name: 'Webster Hall',
        address: '123 Memory Lane',
        city: 'New York City',
        booking_manager: 'Deadmau5',
        capacity: -12
      });
    });

    it('should validate that name cannot be empty', function(done) {
      invalidVenueA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'name';
          })[0];
          expect(error.message).to.equal('Name cannot be blank');
          done();
        });
    });

    it('should validate that address cannot be empty', function(done) {
      invalidVenueA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'address';
          })[0];
          expect(error.message).to.equal('Address cannot be blank');
          done();
        });
    });

    it('should validate that city cannot be empty', function(done) {
      invalidVenueA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'city';
          })[0];
          expect(error.message).to.equal('City cannot be blank');
          done();
        });
    });

    it('should validate capacity should be a number', function(done) {
      invalidVenueA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'capacity';
          })[0];
          expect(error.message).to.equal('Capacity must be a number');
          done();
        })
    });

    it('should validate capacity should greater than 0', function(done) {
      invalidVenueB
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'capacity';
          })[0];
          console.log(error)
          expect(error.message).to.equal('Capacity must be greater than 0');
          done();
        })
    });
  });

  context('valid venue', function() {
    beforeEach('build valid venue', function() {
      validVenue = Venue.build({
        name: 'Webster Hall',
        address: '123 Memory Lane',
        city: 'New York City',
        booking_manager: 'Deadmau5',
        capacity: 800
      });
    });


    it("should not have any errors", function(done) {
      validVenue
        .validate()
        .then(function(err) {
          expect(err).to.be.undefined;
          done();
        });
    });
  });

});