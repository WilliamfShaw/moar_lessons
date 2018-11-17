var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  authorStorage: new Backbone.LocalStorage('microblog-authors'),
  postStorage: new Backbone.LocalStorage('microblog')
};

// Hack city, betch
var c = console;
c.l = c.log;
var cl = console.log.bind(console);

$(function() {
  console.log('Loaded, bro.');
  App.postsRouter = new App.Routers.PostsRouter();
  App.authorsRouter = new App.Routers.AuthorsRouter();
  Backbone.history.start();
});
