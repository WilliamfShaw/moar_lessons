App.Routers.Movie = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search/:query': 'search',
    'movies/:id(/:query)': 'movieDetail'
  },

  initialize: function() {
    App.movies = new App.Collections.Movies();
    App.moviesView = new App.Views.Movies({
      collection: App.movies
    });
    App.searchFormView = new App.Views.SearchForm({
      collection: App.movies
    });
    App.movieModalView = new App.Views.MovieModal();
  },

  index: function() {
    $('#search-input').val('');
    App.movieModalView.hide();
    App.movies.reset();
  },

  search: function(query) {
    $('#search-input').val(query.replace('-',' '));
    App.movieModalView.hide();
    App.searchFormView.search();
  },

  movieDetail: function(id, query) {
    if (query) {
      $('#search-input').val(query.replace(' ','-'));
      App.searchFormView.search(true);
    }

  }
});
