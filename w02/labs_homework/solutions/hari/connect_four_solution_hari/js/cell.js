var Cell = function() {
  // 0 - empty
  // 1 - player 1
  // 2 - player 2
  this.value = 0;
};

Cell.prototype.isEmpty = function() {
  return (this.value === 0);
};

Cell.prototype.getValue = function() {
  return this.value;
};

Cell.prototype.setValue = function(value) {
  this.value = value;
};
