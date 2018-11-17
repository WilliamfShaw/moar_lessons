App.Views.NavigationView = Backbone.View.extend({

  el: '#navigation',

  initialize: function() {
    c.l('Navigation view created.');
    this.template = function() {
      return $('#navigation-template').html();
    };
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  events: {
    'click .new-post': 'newPost',
    'click .posts': 'showPosts',
    'click .authors': 'showAuthors'
  },

  newPost: function() {
    App.postsRouter.navigate('posts/new');
    $('#main').html(App.newPostView.$el);
  },

  showPosts: function() {
    App.postsRouter.navigate('posts');
    $('#main').html(App.postsListView.$el);
  },

  showAuthors: function() {
    App.postsRouter.navigate('authors');
  }

});
