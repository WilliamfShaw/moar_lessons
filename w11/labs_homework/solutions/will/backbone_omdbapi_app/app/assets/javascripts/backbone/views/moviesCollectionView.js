App.Views.MoviesCollectionView = Backbone.View.extend({
  el: '#search-results',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(movie) {
    var movieView = new App.Views.MovieView({ model: movie });
    movieView.$el.appendTo(this.$el);
  },

  loading: function() {
    this.$el.prepend('<div>Loading, bro...</div>');
  }
});
