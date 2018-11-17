App.Views.PostsListView = Backbone.View.extend({

  tagName: 'section',

  className: 'posts',

  initialize: function() {
    console.log('New Post List View created');
    this.render();
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'add', this.renderPost);
  },

  render: function() {
    this.collection.each(this.renderPost, this);
  },

  renderPost: function(postModel) {
    this.$el.prepend(new App.Views.Post({ model: postModel }).$el);
  }

});
