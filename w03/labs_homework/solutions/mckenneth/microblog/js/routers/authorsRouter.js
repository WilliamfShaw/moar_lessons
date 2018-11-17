App.Routers.AuthorsRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Author Router initialized');
    App.authors = new App.Collections.Authors;
    App.authors.fetch();
  },

  routes: {
    'authors':'index',
    'authors/new':'new',
    'authors/:id/edit':'edit'
  },

  index: function() {
    App.navigationView.showAuthors();
  },

  new: function() {
    App.navigationView.newAuthor();
  },

  edit: function(id) {
    App.navigationView.editAuthor(App.authors.get(id));
  }

});
