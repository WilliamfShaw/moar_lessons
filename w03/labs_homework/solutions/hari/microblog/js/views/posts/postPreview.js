App.Views.Post = Backbone.View.extend({

  tagName: 'aside',

  className: 'post',

  initialize: function() {
    console.log('Post preview created.');
    this.previewTemplate = Handlebars.compile($('#post-preview-template').html());
    this.fullTemplate = Handlebars.compile($('#post-full-template').html());
    this.renderPreview();
  },

  renderPreview: function() {
    this.$el.html(this.previewTemplate(this.model.toJSON()));
  },

  events: {
    'click .view': 'renderFull',
    'click .less': 'renderPreview'
  },

  renderFull: function() {
    this.$el.html(this.fullTemplate(this.model.toJSON()));
  }

});
