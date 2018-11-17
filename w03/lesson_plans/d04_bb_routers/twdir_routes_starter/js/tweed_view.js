App.Views.TweedView = Backbone.View.extend({

  className: 'tweed',

  initialize: function() {
    console.log('New tweed view created!');
    var source = $('#tweed-template').html();
    this.template = Handlebars.compile(source);

    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);

    this.render();
  },

  delete: function() {
    this.model.destroy();
  },

  events: {
    'click #downvote': 'downvote',
    'click #upvote': 'upvote',
    'click .delete': 'delete',
    'click .content': 'showTweed'
  },

  showTweed: function() {
    App.modalView.setTweed(this.model);
    App.modalView.show();
  },

  upvote: function() {
    this.model.updateVotes(1);
  },

  downvote: function() {
    this.model.updateVotes(-1);
  },

  render: function() {
    var tweedHtml = this.template(this.model.toJSON());
    this.$el.html(tweedHtml);
  }
});
