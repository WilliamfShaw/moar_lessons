App.Views.ArticleModal = Backbone.View.extend({
  el: '#article-modal',

  initialize: function() {
    console.log('Modal View created');
    this.template = Handlebars.compile($('#modal-template').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click #close': 'hide'
  },

  show: function() {
    this.$el.show();
  },

  hide: function() {
    this.$el.hide();
  }
});
