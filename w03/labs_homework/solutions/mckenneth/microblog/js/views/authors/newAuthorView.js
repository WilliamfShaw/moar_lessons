App.Views.NewAuthor = Backbone.View.extend({

  tagName: 'section',

  className: 'new-author',

  initialize: function() {
    this.template = Handlebars.compile($('#new-author-template').html());
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  events: {
    'click .create':'createAuthor'
  },

  createAuthor: function() {
    if (this.$('.name').val()) {
      var data = {
        name: this.$('.name').val(),
        image: this.$('.image').val(),
        blurb: this.$('.blurb').val()
      }
      App.authors.create(data);
    }
    App.navigationView.newPost();
  }

});
