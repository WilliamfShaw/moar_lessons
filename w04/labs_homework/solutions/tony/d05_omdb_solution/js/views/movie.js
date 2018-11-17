App.Views.Movie = Backbone.View.extend({
  className: 'movie',

  initialize: function() {
    this.template = Handlebars.compile($('#movie-template').html());

    this.render();
  },

  events: {
    'click': 'showModal'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  showModal: function() {
    App.movieModalView.setMovie(this.model);
    App.movieModalView.show();
    var path = 'movies/' + this.model.get('imdbID');
    path += '/' + App.searchFormView.currentQuery.replace(' ','-');
    App.movieRouter.navigate(path);
  }
});
