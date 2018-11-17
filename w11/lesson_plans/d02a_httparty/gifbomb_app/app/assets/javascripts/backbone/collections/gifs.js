App.Collections.Gifs = Backbone.Collection.extend({
  searchUrl: function(term) {
    return '/gifs/search/?term=' + encodeURI(term);
  },
  randomUrl: function() {
    return '/gifs/random';
  },
  search: function(term) {
    $.ajax({
      url: this.searchUrl(term),
      method: 'get'
    })
    .done(this.reset.bind(this));
  },
  randomGif: function() {
    $.ajax({
      url: this.randomUrl(),
      method: 'get'
    })
    .done(this.reset.bind(this));
  },
  model: App.Models.Gif

});