App.Collections.Authors = Backbone.Collection.extend({

  model: App.Models.Author,

  localStorage: App.authorStorage,

  getAuthorNames: function() {
  	var names = this.map(function(model, idx){
  		return model.get('name');
  	});
  	return names;
  }

});
