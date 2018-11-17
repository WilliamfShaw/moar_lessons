var TweedCollectionView = Backbone.View.extend({
  el: '#tweed-collection-view',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(tweed) {
    var newTweedView = new TweedView({ model: tweed });
    newTweedView.render();
    newTweedView.$el.appendTo(this.$el);
  },

  renderAll: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  }
});
