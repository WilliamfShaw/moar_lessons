console.log("loaded bro");

var letter = function(letter) {
	var newLetter = {
		value: letter, 
		hidden: true, 
		hide: function () {
			this.hidden = true;
		},
		show: function () {
			this.hidden = false;
		},
		render: function () {
			return this.hidden ? ' _ ' : this.value;
		}
	};
	return newLetter;
};

