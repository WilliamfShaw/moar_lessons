App.Views.Articles = Backbone.View.extend({

  el: '#article-preview',

  initialize: function() {
    console.log('Articles View created');
    this.listenTo(this.collection, 'reset', this.render);
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.collection.each(this.renderOne, this);
  },

  renderOne: function(article) {
    var articleView = new App.Views.Article({ model: article });
    this.$el.append(articleView.$el);
  }

});
