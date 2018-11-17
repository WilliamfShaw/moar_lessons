App.Collections.Movies = Backbone.Collection.extend({
  model: App.Models.Movie,
  searchMovies: function(searchTerm) {
    console.log('searched!')
    $.ajax({
      url: App.urlApiRoot,
      method: 'GET',
      // rather than append things to my search string,
      // I used this data object to pass on parameters.  
      data: {
        s: searchTerm,
      },
      dataType: 'json'
    })
    .done(this.addMovies)
  },
  addMovies: function(movies) {
    console.log('finished');
    // the information I care about
    // is at the 'Search' level of the
    // data response.  
    var results = movies['Search'];
    App.movies.reset();
    results.forEach(function(movie) {
      App.movies.add({
        title: movie.Title,
        year: movie.Year,
        imdbID: movie.imdbID
      });
    })
  }
});
