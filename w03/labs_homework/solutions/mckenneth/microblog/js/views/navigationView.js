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
    'click .new-author': 'newAuthor',
    'click .posts': 'showPosts',
    'click .authors': 'showAuthors'
  },

  newPost: function() {
    App.postsRouter.navigate('posts/new');
    $('#main').html(new App.Views.NewPost().$el)
  },

  editPost: function(post) {
    App.postsRouter.navigate('posts/' + post.id + '/edit');
    $('#main').html(new App.Views.EditPost({model: post}).$el)
  },

  showPosts: function() {
    App.postsRouter.navigate('posts');
    $('#main').html(new App.Views.PostsListView({ collection: App.posts }).$el);
  },

  showAuthors: function() {
    App.authorsRouter.navigate('authors');
    $('#main').html(new App.Views.AuthorsListView({ collection: App.authors }).$el);
  },

  newAuthor: function() {
    App.authorsRouter.navigate('authors/new');
    $('#main').html(new App.Views.NewAuthor().$el);
  },

  editAuthor: function(author) {
    App.authorsRouter.navigate('author/' + author.id + '/edit');
    $('#main').html(new App.Views.EditAuthor({model: author}).$el);
  }

});
