var App = {
  Models: {},
  Collections: {},
  Views: {}
};

$(function() {
  App.collection = new App.Collections.Articles;
  App.collectionView = new App.Views.Articles({ collection: App.collection });
  App.articleModalView = new App.Views.ArticleModal;
});
