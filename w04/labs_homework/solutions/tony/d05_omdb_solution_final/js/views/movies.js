App.Views.Movies = Backbone.View.extend({
  el: '#results-container',
  events: {
    'click #search-button': 'searchByClick',
    'keypress #search-input': 'searchByEnter'
  },
  currentQuery: '',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  render: function() {
    $('#search-results').empty();
    this.collection.each(this.renderOne, this);
  },
  renderOne: function(movie) {
    var movieView = new App.Views.Movie({ model: movie });
    movieView.$el.appendTo($('#search-results'));
  },
  loading: function() {
    // a function while we wait for our response data
    // to render.  
    $('#search-results').prepend('<div>Loading, bro...</div>');
  },
  // These two 'searchBy' fxns exist
  // just to handle click AND keypress enter.  
  searchByEnter: function(e) {
    console.log(e.which);
    if (e.which === 13) {
      this.search();
    }
  },
  searchByClick: function() {
    this.search();
  },
  search: function(freezeRoute) {
    var query = this.$('#search-input').val();
    if (query === '') {
      // if the search input is empty, 
      // do nothing.  
      return;
    }
    // render loading message
    this.loading();
    // begin the ajax request.
    App.movies.searchMovies(query)
    // reset the current query
    this.currentQuery = query;
    console.log(freezeRoute);
    // to make the router play better.
    if (!freezeRoute) {
      App.movieRouter.navigate('search/' + encodeURI(query));
    }
  }
});
