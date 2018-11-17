App.Views.Author = Backbone.View.extend({

  tagName: 'aside',

  className: 'author',

  initialize: function() {
    console.log('Author preview created.');
    this.previewTemplate = Handlebars.compile($('#author-preview-template').html());
    this.fullTemplate = Handlebars.compile($('#author-full-template').html());
    this.renderPreview();
  },

  renderPreview: function() {
    this.$el.html(this.previewTemplate(this.model.toJSON()));
  },

  events: {
    'click .view': 'renderFull',
    'click .less': 'renderPreview',
    'click .edit': 'showEdit',
    'click .view-post':'goToPost'
  },

  renderFull: function() {
  	var author = this.model.toJSON();
  	author.posts = App.posts.getAuthorPosts(this.model.get('name'));
    this.$el.html(this.fullTemplate(author));
  },

  showEdit: function() {
    App.navigationView.editAuthor(this.model);
  },

  goToPost: function(event) {
  	App.postsRouter.navigate('posts/' + event.target.id);
  	App.navigationView.showPosts();
  	$('#' + event.target.id).click();
  }

});
