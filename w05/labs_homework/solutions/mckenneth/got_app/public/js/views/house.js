App.Views.House = Backbone.View.extend({

  events: {
    'click': 'fetchAndRenderMembers',
    'click .back': 'back'
  },

  initialize: function() {
    this.template = Handlebars.compile($('#house-template').html());
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
  },

  fetchAndRenderMembers: function() {
    this.model.fetch({
      success: this.renderMembers.bind(this)
    });
  },

  renderMembers: function() {
    this.$('.mask').html((new App.Views.Humans({ collection: this.model.members })).$el);
  },

  back: function(e) {
    this.render();
    e.stopPropagation();
  }
})
