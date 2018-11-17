App.Models.Movie = Backbone.Model.extend({
  apiURLRoot: 'http://www.omdbapi.com/?',
  getFullMovieInfo: function() {
    // debugger check if plot poster
  	console.log('getting full details@!#!');
  	$.ajax({
  		url: this.apiURLRoot,
  		method: 'GET',
  		data: {
  			i: this.get('imdbID'),
  			plot: 'short'
  		},
  		dataType: 'json'
  	})
  	.done(this.addFullMovieInfo)
  },
  addFullMovieInfo: function(movieData) {
  	console.log('got the data');
  	App.movieModalView.model.set({
  		poster_url: movieData['Poster'],
  		genre: movieData['Genre'],
  		plot: movieData['Plot']
  	})
	}
});
