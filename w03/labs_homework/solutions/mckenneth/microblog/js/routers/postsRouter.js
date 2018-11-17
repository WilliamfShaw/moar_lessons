App.Routers.PostsRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Post Router initialized');
    App.navigationView = new App.Views.NavigationView;
    App.posts = new App.Collections.Posts;
    App.posts.fetch();
  },

  routes: {
    '':'home',
    'posts':'index',
    'posts/new':'new',
    'posts/:id':'show',
    'posts/:id/edit':'edit'
  },

  home: function() {
    console.log('sup.');
  },

  index: function() {
    App.navigationView.showPosts();
  },

  new: function() {
    App.navigationView.newPost();
  },

  edit: function(id) {
    App.navigationView.editPost(App.posts.get(id));
  },

  show: function(id) {
    App.navigationView.showPosts();
    $('#' + id).click();
  }

});
