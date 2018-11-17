App.Views.Humans = Backbone.View.extend({

  className: 'humans',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.template = Handlebars.compile($('#humans-template').html());
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  events: {
  	'click .human-name': 'showModal'
  },

  showModal: function(event) {
  	var model = this.collection.get( $(event.target).data('id') );
  	model.fetch({
  		success: function(model) {
  			console.log(model);
  			new App.Views.HumanModal({ model: model });
  		}
  	});
  }
});
