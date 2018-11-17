App.Collections.Movies = Backbone.Collection.extend({
  apiUrlRoot: 'http://www.omdbapi.com/?',
  model: App.Models.Movie,
  searchMovies: function(searchTerm) {
    console.log('searched!')
    $.ajax({
      url: this.apiUrlRoot,
      method: 'GET',
      data: {
        s: searchTerm,
      },
      dataType: 'json'
    })
    .done(this.addMovies)
  },
  addMovies: function(movies) {
    console.log('finished');
    var results = movies['Search'];
    App.movies.reset();
    results.forEach(function(movie) {
      App.movies.add({
        title: movie['Title'],
        year: movie['Year'],
        imdbID: movie['imdbID']
      });
    })
  }
});
