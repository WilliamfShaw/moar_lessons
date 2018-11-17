App.Views.EditAuthor = Backbone.View.extend({
	tagName: 'section',

  className: 'edit-author',

  initialize: function() {
    this.template = Handlebars.compile($('#edit-author-template').html());
    this.render();
  },

  render: function() {
  	var editParams = this.model.toJSON();
    this.$el.html(this.template(editParams));
  },

  events: {
    'click .edit':'editAuthor',
    'click .delete': 'deleteAuthor'
  },

  editAuthor: function() {
    if (this.$('.author').val()) {
      var data = {
        title: this.$('.name').val(),
        content: this.$('.image').val(),
        author: this.$('.blurb').val()
      }
      App.authors.get(this.model.id).save(data);
    }
    App.navigationView.showPosts();
  },

  deleteAuthor: function() {
  	this.model.destroy();
    var authorPosts = App.posts.where({ author: this.model.get('name') });
    App.posts.remove(authorPosts);
  	App.navigationView.showPosts();
  }
});