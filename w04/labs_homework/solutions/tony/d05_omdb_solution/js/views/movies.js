App.Views.Movies = Backbone.View.extend({
  el: '#search-results',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  render: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(movie) {
    debugger
    var movieView = new App.Views.Movie({ model: movie });
    movieView.$el.appendTo(this.$el);
  },

  loading: function() {
    this.$el.prepend('<div>Loading, bro...</div>');
  }
});
