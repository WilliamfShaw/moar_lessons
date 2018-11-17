App.Views.MovieView = Backbone.View.extend({
  className: 'movie',

  initialize: function() {
    this.template = HandlebarsTemplates['movies/movie'];
    this.render();
  },

  events: {
    'click': 'showModal'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  showModal: function() {
    App.Views.movieModalView.setMovie(this.model);
    App.Views.movieModalView.show();
    var path = 'movies/' + this.model.get('imdbID');
    path += '/' + App.Views.searchFormView.currentQuery;
    App.Routers.moviesRouter.navigate(path);
  }
});
