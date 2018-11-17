console.log("loaded bro");

var Cell = function () {
	this.value = null;
};

Cell.prototype.isEmpty = function() {
	if ( !this.value ) {
		return true;
	}
	return false;
};

Cell.prototype.setValue = function(value) {
	this.value = value;
};

Cell.prototype.getValue = function() {
	return this.value;
};