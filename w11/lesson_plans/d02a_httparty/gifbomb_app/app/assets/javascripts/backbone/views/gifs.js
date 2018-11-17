App.Views.Gifs = Backbone.View.extend({
  el: '#gifs-container',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.render);
  },
  renderAll: function() {
    this.$('#display').empty();
    this.collection.each(this.render, this);
  },
  render: function(gif) {
    this.$('#display').append(new App.Views.Gif({ model: gif }).$el)
  },
  events: {
    'click #search':'searchForGif',
    'click #random':'getRandomGif'
  },
  searchForGif: function() {
    var term = this.$('#term').val();
    this.collection.search(term);
  },
  getRandomGif: function() {
    this.collection.randomGif();
  }
})