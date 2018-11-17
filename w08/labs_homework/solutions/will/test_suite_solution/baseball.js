var Baseball = function (city, name, manager, stadium) {
  this.city = city;
  this.name = name; 
  this.manager = manager;
  this.stadium = stadium;
}

Baseball.prototype.teamName = function() {
 return ["The", this.city, this.name].join(" ")
};

Baseball.prototype.playAt = function() {
  return [this.teamName(), "play at", this.stadium].join(" ")
};

Baseball.prototype.managedBy = function() {
  return [this.teamName(), "are managed by", this.manager].join(" ")
};

var mets = new Baseball("New York", "Mets", "Terry Collins", "Citi Field");

console.log(mets.teamName());

console.log(mets.playAt());

console.log(mets.managedBy());

module.exports = Baseball;