App.Views.Article = Backbone.View.extend({
  className: 'article-result',

  initialize: function() {
    console.log('Article View created');
    this.template = Handlebars.compile($('#article-template').html());
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click .title': 'showModal'
  },

  showModal: function() {
    App.articleModalView.model = this.model;
    App.articleModalView.render();
    App.articleModalView.show();
  }

});
