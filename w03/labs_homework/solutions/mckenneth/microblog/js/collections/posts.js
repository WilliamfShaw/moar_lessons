App.Collections.Posts = Backbone.Collection.extend({

  model: App.Models.Post,

  localStorage: App.postStorage,

  getAuthorPosts: function(name) {
  	return this.where({ author: name }).map(function(model) { return model.toJSON() });
  }

});
