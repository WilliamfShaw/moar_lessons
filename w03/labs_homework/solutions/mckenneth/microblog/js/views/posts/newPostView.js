App.Views.NewPost = Backbone.View.extend({

  tagName: 'section',

  className: 'new-post',

  initialize: function() {
    this.template = Handlebars.compile($('#new-post-template').html());
    this.render();
  },

  render: function() {
    var authors = App.authors.getAuthorNames();
    this.$el.html(this.template(authors));
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
