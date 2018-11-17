App.Views.Gif = Backbone.View.extend({
  initialize: function() {
    this.template = HandlebarsTemplates['gif'];
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
})