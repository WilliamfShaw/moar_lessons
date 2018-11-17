App.Views.MovieModalView = Backbone.View.extend({
  el: '#movie-modal',

  initialize: function() {
    this.template = HandlebarsTemplates['movies/movieModal'];
  },

  events: {
    'click .close-modal': 'hide'
  },

  setMovie: function(movie) {
    this.model = movie;
    this.render();
  },

  show: function() {
    this.$el.fadeIn(500);
  },

  hide: function() {
    this.$el.fadeOut(200);
    if (App.Views.searchFormView.currentQuery == '') {
      App.Routers.moviesRouter.navigate('');
    }
    else {
      App.Routers.moviesRouter.navigate('search/' + App.Views.searchFormView.currentQuery);
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
})
