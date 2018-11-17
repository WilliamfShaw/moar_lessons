App.Views.EditPost = Backbone.View.extend({
	tagName: 'section',

  className: 'edit-post',

  initialize: function() {
    this.template = Handlebars.compile($('#edit-post-template').html());
    this.render();
  },

  render: function() {
  	var editParams = this.model.toJSON();
  	editParams.authors = App.authors.getAuthorNames();
    this.$el.html(this.template(editParams));
  },

  events: {
    'click .edit':'editPost',
    'click .delete': 'deletePost'
  },

  editPost: function() {
    if (this.$('.author').val()) {
      var data = {
        title: this.$('.title').val(),
        content: this.$('.content').val(),
        author: this.$('.author').val()
      }
      App.posts.get(this.model.id).save(data);
    }
    App.navigationView.showPosts();
  },

  deletePost: function() {
  	this.model.destroy();
  	App.navigationView.showPosts();
  }
});