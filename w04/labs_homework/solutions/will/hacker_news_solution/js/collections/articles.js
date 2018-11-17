console.log("loaded bro")

App.Collections.Articles = Backbone.Collection.extend({
  initialize: function() {
    console.log("post collection loaded bro");
    this.getArticles();
  },
  getArticles: function() {
    var baseUrl = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    $.ajax({
      url: baseUrl,
      method: "GET",
      dataType: "json"
    }).done(this.addToCollection)
  },
  addToCollection: function(data) {
    for (var i = 0; i < data.length; i++) {
      App.collection.add({
        id: data[i]
      })
    }
    App.collection.getArticleInfo();
  },
  getArticleInfo: function() {
    var articles = App.collection.models;
    for (var i = 0; i < articles.length; i++) {
      var model = articles[i]
      var id = articles[i].attributes.id;
      $.ajax({
        url: "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty",
        method: "GET",
        dataTypes: "json"
      }).done(App.collection.updateModel)
    }
  },
  updateModel: function(data) {
  	var model = App.collection.get(data.id)
    model.set({
    	author: data.by,
      title: data.title,
      url: data.url
    })
  },
  model: App.Models.Article
})