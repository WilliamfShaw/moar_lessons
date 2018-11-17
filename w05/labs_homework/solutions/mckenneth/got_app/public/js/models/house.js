App.Models.House = Backbone.Model.extend({
  urlRoot: '/houses',

  parse: function(data) {
    if (data.humans) {
      this.members = new App.Collections.Humans();
      this.members.add(data.humans);
    }
    debugger
    return data;
  }
});
