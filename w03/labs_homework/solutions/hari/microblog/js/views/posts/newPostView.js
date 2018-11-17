App.Views.NewPost = Backbone.View.extend({

  tagName: 'section',

  className: 'new-post',

  initialize: function() {
    cl('hi');
    this.template = Handlebars.compile($('#new-post-template').html());
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  events: {
    'click .create':'createPost'
  },

  createPost: function() {
    if (this.$('.author').val()) {
      var data = {
        title: this.$('.title').val(),
        content: this.$('.content').val(),
        author: this.$('.author').val()
      }
      App.posts.create(data);
    }
    App.navigationView.showPosts();
  }

});
