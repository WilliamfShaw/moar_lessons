App.Views.SearchForm = Backbone.View.extend({
  el: '#search-form',

  events: {
    'click #search-button': 'searchByClick',
    'keypress #search-input': 'searchByEnter'
  },

  currentQuery: '',

  searchByEnter: function(e) { // This function exists to weed out the event object
    console.log(e.which);
    if (e.which === 13) {
      this.search();
    }
  },

  searchByClick: function() { // This function exists to weed out the event object
    this.search();
  },

  search: function(freezeRoute) {
    var query = this.$('#search-input').val();
    if (query === '') {
      return;
    }
    App.moviesView.loading();
    App.movies.searchMovies(query)
    this.currentQuery = query;
    console.log(freezeRoute);
    // Is this just to prevent the same movie from being loaded
    // While it's already showing as the current search?
    if (!freezeRoute) {
      App.movieRouter.navigate('search/' + query.replace(' ','-'));
    }
  }
});
