App.Models.Post = Backbone.Model.extend({

  initialize: function() {
    console.log('Post Model created');
  },

  localStorage: App.storage,

  defaults: {
    title: 'Blank Title',
    content: 'No Content'
  }

});
