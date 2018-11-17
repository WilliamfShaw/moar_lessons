App.Views.Human = Backbone.View.extend({

  tagName: 'li',

  className: 'human-item',

  initialize: function() {
    this.template = Handlebars.compile($('#human-template').html());
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
  }

})
