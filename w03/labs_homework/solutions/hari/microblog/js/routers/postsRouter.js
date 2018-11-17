App.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Post Router initialized');
    App.navigationView = new App.Views.NavigationView;
    App.posts = new App.Collections.Posts;
    App.postsListView = new App.Views.PostsListView({ collection: App.posts });
    App.newPostView = new App.Views.NewPost();
    App.posts.fetch();
  },

  routes: {
    '':'home',
    'posts':'index'
  },

  home: function() {
    console.log('sup.');
  },

  index: function() {
    c.l('sefsef');
    App.navigationView.showPosts();
  }

});
