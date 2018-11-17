console.log("loaded bro");

var whamterestLocalStorage = new Backbone.LocalStorage('postdb');

var Post = Backbone.Model.extend ({
	initialize: function () {
		console.log("New Post Model Created Bro");
	}, 
	defaults: {
		"Title": "Hello",
		"Author": "How",
		"Image": "http://www.placecage.com/c/200/300",
		"Content": "Are",
		"Catergory": "You"
	},
	localStorage: whamterestLocalStorage
});
