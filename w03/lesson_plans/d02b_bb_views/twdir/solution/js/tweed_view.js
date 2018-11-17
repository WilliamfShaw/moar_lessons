var TweedView = Backbone.View.extend({
  el: '#test',

  initialize: function() {
    this.template = Handlebars.compile($('#tweed-template').html());
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click #upvote': 'upvote',
    'click #downvote': 'downvote'
  },

  upvote: function() {
    this.model.updateVotes(1);
    this.render();
  },

  downvote: function() {
    this.model.updateVotes(-1);
    this.render();
  }
});
