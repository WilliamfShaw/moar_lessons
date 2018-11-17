var Cell = function() {
	//I used empty string instead of null.
	this.value = ' ';
}

Cell.prototype.getValue = function() {
	return this.value;
};

Cell.prototype.setValue = function(val) {
	this.value = val;
};

Cell.prototype.isEmpty = function() {
	//no need for if statement, just return the comparison itself.
	return this.value === ' ';
};
