App.Models.Author = Backbone.Model.extend({

  initialize: function() {
    console.log('Author Model created');
  },

  localStorage: App.storage,

  defaults: {
    name: 'McK',
    image: 'http://placecage.com/100/100',
    blurb: 'My Name is My Name'
  }

});
