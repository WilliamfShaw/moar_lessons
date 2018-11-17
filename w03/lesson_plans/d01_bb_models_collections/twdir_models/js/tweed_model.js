var twdirLocalStorage = new Backbone.LocalStorage('twdir');
console.log('model ids', twdirLocalStorage.records);

var TweedModel = Backbone.Model.extend({
	initialize: function() {
		console.log('New Tweed Model created');
	},
	defaults: {
		"content": "",
		"author": "",
		"votes": 0
	},
	localStorage: twdirLocalStorage
});

//**WE DO**
var fetchAllModels = function() {

	var models = [];

	twdirLocalStorage.records.forEach(function(tweedID) {
		var model = new TweedModel({ id: tweedID });
		model.fetch();
		models.push( model );
	});

	return models;
};
