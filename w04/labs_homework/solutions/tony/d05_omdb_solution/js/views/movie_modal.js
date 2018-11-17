App.Views.MovieModal = Backbone.View.extend({
  el: '#movie-modal',

  initialize: function() {
    this.template = Handlebars.compile($('#movie-modal-template').html());
  },

  events: {
    'click .close-modal': 'hide'
  },

  setMovie: function(movie) {
    this.model = movie;
    this.listenTo(this.model, 'change', this.render);
    this.model.getFullMovieInfo();
  },

  show: function() {
    this.$el.fadeIn(500);
  },

  hide: function() {
    this.$el.fadeOut(200);
    if (App.searchFormView.currentQuery === '') {
      App.movieRouter.navigate('');
    }
    else {
      App.movieRouter.navigate('search/' + App.searchFormView.currentQuery.replace(' ','-'));
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
})
