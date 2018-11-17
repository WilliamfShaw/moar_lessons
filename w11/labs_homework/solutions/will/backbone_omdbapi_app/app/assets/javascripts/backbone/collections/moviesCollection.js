App.Collections.MoviesCollection = Backbone.Collection.extend({
  url: '/movies/search',
  model: App.Models.Movie
});
