var TweedRouter = Backbone.Router.extend({

  initialize: function() {
    App.collection = new TweedsCollection();
  	App.collection.fetch();

  	App.collectionView = new TweedCollectionView({ collection: App.collection });
  	App.modalView = new ModalView();
  },

  routes: {
    '': 'index',
    'tweeds/:id': 'show'
  },

  index: function() {
    App.modalView.hide();
    App.collectionView.renderAll();
  },

  show: function(id) {
    App.collectionView.renderAll();
    var tweed = new TweedModel({ id: id });
    tweed.fetch();
    App.modalView.setTweed(tweed);
    App.modalView.show();
  }
});
