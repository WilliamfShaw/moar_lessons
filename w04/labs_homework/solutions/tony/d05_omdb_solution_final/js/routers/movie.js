App.Routers.Movie = Backbone.Router.extend({
  routes: {
    '': 'index',
    'search/:query': 'search',
    'movies/:id/:query': 'movieDetail'
  },

  initialize: function() {
    // save the root api url in the App because it's
    // the same across our app.  
    App.urlApiRoot = 'http://www.omdbapi.com/?';
    App.movies = new App.Collections.Movies();
    App.moviesView = new App.Views.Movies({
      collection: App.movies
    });
    App.movie = new App.Models.Movie();
    App.movieModalView = new App.Views.MovieModal({
      model: App.movie
    });
  },

  index: function() {
    // Clear the search input
    $('#search-input').val('');
    // hide the modal if it's shown
    App.movieModalView.hide();
    // clear the collection of movies from App.movies
    App.movies.reset();
  },

  search: function(query) {
    // place the query string in the search input box.  
    $('#search-input').val(query.replace('%20',' '));
    // hide the modal if shown
    App.movieModalView.hide();
    // generate search results
    App.moviesView.search();
  },

  movieDetail: function(id, query) {
    // same as above
    $('#search-input').val(query.replace('%20',' '));
    App.moviesView.search(true);
    // make a new movie
    var movie = new App.Models.Movie({imdbID: id});
    // pass this model to the View.  
    // The listener on it knows to re-render.  
    App.movieModalView.setMovie(movie);
    // App.movieModalView.model.getFullMovieInfo();
    App.movieModalView.show()
  }
});
