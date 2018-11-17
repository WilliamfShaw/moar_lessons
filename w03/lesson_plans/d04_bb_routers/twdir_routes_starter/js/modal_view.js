App.Views.ModalView = Backbone.View.extend({
  el: '#modal',

  initialize: function() {
    console.log('Modal view created.');
  },

  events: {
    'click .close': 'hide'
  },

  render: function() {
    this.$el.html('<p class="close">Close</p>' );
    var tweedView = new App.Views.TweedView({ model: this.model });
    this.$el.append(tweedView.$el);
  },

  show: function() {
    this.$el.show();
  },

  hide: function() {
    this.$el.hide();
  },

  setTweed: function(tweed) {
    this.stopListening();
    this.model = tweed;
    this.listenTo(this.model, 'destroy', this.hide);
    this.render();
  }

});
