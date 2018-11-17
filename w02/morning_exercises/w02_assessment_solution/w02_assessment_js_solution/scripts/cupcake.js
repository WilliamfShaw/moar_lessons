// Using a Constructor Function, create a Cupcake Constructor.

var Car = function(cakeFlavor, frostingFlavor){
	this.cake = cakeFlavor;
	this.frosting = frostingFlavor;
	this.sprinkles = false;
}

// Prototype behaviors

Cupcake.prototype.getCake = function() {
	return this.cake;
};

Cupcake.prototype.getFrosting = function() {
	return this.frosting;
};

Cupcake.prototype.hasSprinkles = function() {
	return this.sprinkles;
};

Cupcake.prototype.addSprinkles = function() {
	this.sprinkles = true;
};

Cupcake.prototype.reFrost = function(newFrosting) {
	this.frosting = newFrosting;
};

// Make doubleChoc

var doubleChoc = new Cupcake('chocolate', 'chocolate');
doubleChoc.getCake();
doubleChoc.getFrosting();
doubleChoc.addSprinkles();
doubleChoc.hasSprinkles();
doubleChoc.reFrost('mint');
doubleChoc.getFrosting();
