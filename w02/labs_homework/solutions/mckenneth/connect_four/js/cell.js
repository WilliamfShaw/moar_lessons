var Cell = function() {
	this.value = 0;
};

Cell.prototype.isEmpty = function() {
	return !this.value
};

Cell.prototype.getValue = function() {
	return this.value;
};

Cell.prototype.setValue = function(value) {
	this.value = value;
	return true;
};