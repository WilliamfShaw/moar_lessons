App.Views.MovieModal = Backbone.View.extend({
  el: '#movie-modal',
  initialize: function() {
    this.template = Handlebars.compile($('#movie-modal-template').html());
    // re-render every time this model is changed.  
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click .close-modal': 'hide'
  },

  setMovie: function(movie) {
    // note: using set here with movie.toJSON
    // 'changes' the model.
    // this.model = movie will not cause a 'change'
    // to the model itself if a model has already been created
    // and is being reclicked upon.  
    this.model.set(movie.toJSON());
    this.model.getFullMovieInfo();
  },

  show: function() {
    // to look smoother.  
    this.$el.fadeIn(500);
  },

  hide: function() {
    // to look smoother and navigate router.  
    this.$el.fadeOut(200);
    if (App.moviesView.currentQuery === '') {
      App.movieRouter.navigate('');
    }
    else {
      App.movieRouter.navigate('search/' + encodeURI(App.moviesView.currentQuery));
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.show();
  }
})
