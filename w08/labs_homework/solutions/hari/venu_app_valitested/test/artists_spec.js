var expect           = require('chai').expect
    models           = require('../models'),
    Artist           = models.artists,
    Event            = models.events,
    Venue           = models.venues;


describe('Artist', function() {
  var nullArtist;
  var invalidArtist;
  var validArtist;

  context('null Artist', function() {
    beforeEach('build null Artist', function() {
      nullArtist = Artist.build();
    });

    it("should validate the presence of name", function(done) {
      nullArtist
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('name');
          done();
        });
    });

    it("should validate the presence of genre", function(done) {
      nullArtist
        .validate()
        .then(function(err) {
          var error_fields = err.errors.map(function(error) {
            return error.path
          });
          expect(error_fields).to.include('genre');
          done();
        });
    });
  });

  context('invalid Artist', function() {
    beforeEach('build invalid Artist', function() {
      invalidArtistA = Artist.build({
        name: '',
        genre: '',
        gross_earnings: ''
      });

      invalidArtistB = Artist.build({
        name: 'Katy Perry',
        genre: 'Folk',
        gross_earnings: -12
      });
    });

    it('should validate that name cannot be empty', function(done) {
      invalidArtistA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'name';
          })[0];
          expect(error.message).to.equal('Name cannot be blank');
          done();
        });
    });

    it('should validate that certain genre must be used', function(done) {
      invalidArtistB
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'genre';
          })[0];
          expect(error.message).to.equal('Genre must be one of the following: "Rock", "Pop", "Jazz", "Hiphop", "Metal", "EDM", "Dubstep"');
          done();
        });
    });

    it('should validate that gross earnings is an Int', function(done) {
      invalidArtistA
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'gross_earnings';
          })[0];
          expect(error.message).to.equal('Gross earnings must be an integer');
          done();
        });
    });

    it('should validate gross earnings should greater than 0', function(done) {
      invalidArtistB
        .validate()
        .then(function(err) {
          var error = err.errors.filter(function(error) {
            return error.path === 'gross_earnings';
          })[0];
          expect(error.message).to.equal('Gross earnings must be greater than 0');
          done();
        })
    });
  });

  context('valid Artist', function() {
    beforeEach('build valid Artist', function() {
      validArtist = Artist.build({
        name: 'Katy Perry',
        genre: 'Pop',
        gross_earnings: 1000000,
      });
    });


    it("should not have any errors", function(done) {
      validArtist
        .validate()
        .then(function(err) {
          expect(err).to.be.undefined;
          done();
        });
    });
  });

});