App.Views.SearchFormView = Backbone.View.extend({
  el: '#search-form',


  events: {
    'click #search-button': 'searchByClick',
    'click #logout-button': 'logout',
    'keypress #search-input': 'searchByEnter'
  },

  currentQuery: '',

  initialize: function() {
    this.template = HandlebarsTemplates['login/searchForm'];
  },

  render: function() {
  	this.$el.html(this.template());
  },

  logout: function() {
  	$.ajax({
  		url: '/sessions',
  		type: 'DELETE',
  		success: function(data) {
  			alert('Successfully logged out');
  			App.Views.loginView.$el.show();
  			App.Views.searchFormView.$el.empty();
  			App.Views.searchResultsView.$el.empty();
  		}
  	})
  },

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
    App.Views.searchResultsView.loading();
    App.Collections.movies.fetch({
      data: {query: query},
      reset: true
    });
    this.currentQuery = query;
    console.log(freezeRoute);
    if (!freezeRoute) {
      App.Routers.moviesRouter.navigate('search/' + query);
    }
  }
});


var query = [near, distance, bar_price]

this.collection.fetch({
  data: {query: query}
})