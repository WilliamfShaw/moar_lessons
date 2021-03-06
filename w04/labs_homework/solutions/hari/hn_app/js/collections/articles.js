App.Collections.Articles = Backbone.Collection.extend({
  model: App.Models.Article,

  initialize: function() {
    console.log('New collection');
    this.getArticles();
  },

  getArticles: function() {
    $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
      method: 'GET'
    }).done(this.addToCollection.bind(this));
  },

  addToCollection: function(data) {
    var models = data.map(function(id) {
      return new App.Models.Article({ id: id });
    });
    this.reset(models);
    this.getArticleInfo();
  },

  getArticleInfo: function() {
    this.each(function(model) {
      $.ajax({
        url: 'https://hacker-news.firebaseio.com/v0/item/' + model.get('id') + '.json?print=pretty',
        method: 'GET'
      }).done(this.updateModel.bind(this));
    }, this);
  },

  updateModel: function(data) {
    var model = this.get(parseInt(data.id))
    model.set({
      author: data.by,
      title: data.title,
      url: data.url
    });
  }

});
