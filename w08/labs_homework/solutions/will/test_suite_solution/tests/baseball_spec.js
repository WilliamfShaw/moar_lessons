var Baseball = require('../baseball.js')
var expect = require('chai').expect;


describe('Baseball', function() {
  var name, 
      city, 
      manager, 
      stadium,
      mets;

  beforeEach('make team', function () {
    name = "Mets";
    city = "New York";
    manager = "Terry Collins",
    stadium = "Citi Field"
    mets = new Baseball(city, name, manager, stadium);
  });


  // Attributes

  it('should have a name', function() {
    expect(mets.name).to.equal(name)
  });

  it('should have a city', function() {
    expect(mets.city).to.equal(city)
  });

  it('should have a manager', function() {
    expect(mets.manager).to.equal(manager) 
  });

  it('should have a stadium', function() {
    expect(mets.stadium).to.equal(stadium)
  });

  //Methods

  it('should return the full team name', function() {
    expect(mets.teamName()).to.equal("The New York Mets")
  });

  it('should return the name and stadium', function () {
    expect(mets.playAt()).to.equal("The New York Mets play at Citi Field")
  })

  it('should return the name and manager', function () {
    expect(mets.managedBy()).to.equal("The New York Mets are managed by Terry Collins")
  })

});