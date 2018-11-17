console.log("loaded bro");

var whamterestLocalStorage = new Backbone.LocalStorage('postdb');

var PostsCollection  = Backbone.Collection.extend({
	initialize: function () {
		console.log("New Post Collection Made Bro");
	},
	model: Post,
	localStorage: whamterestLocalStorage
});