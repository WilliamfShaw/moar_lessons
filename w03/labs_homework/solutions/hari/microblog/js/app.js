var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  storage: new Backbone.LocalStorage('microblog')
};

// Hack city, betch
var c = console;
c.l = c.log;
var cl = console.log.bind(console);

$(function() {
  console.log('Loaded, bro.');
  App.postsRouter = new App.Routers.PostsRouter();
  Backbone.history.start();
});
