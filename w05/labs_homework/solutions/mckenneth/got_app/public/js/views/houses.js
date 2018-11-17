App.Views.Houses = Backbone.View.extend({

  el: '#westeros',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function() {
    this.collection.each(this.renderOne, this)
  },

  renderOne: function(house) {
    this.$el.append(new App.Views.House({model: house}).$el);
  }

});
