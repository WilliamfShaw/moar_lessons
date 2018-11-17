var whamterestLocalStorage = new Backbone.LocalStorage('postdb');

var Post = Backbone.Model.extend ({
	initialize: function () {
		console.log("New Post Model Created Bro");
	},
	defaults: {
		title: "Hello",
		author: "How",
		image: "http://www.placecage.com/c/200/300",
		content: "Are",
		category: "You"
	},
	updateImage: function (image_url) {
		this.save('image', image_url);
	},
	localStorage: whamterestLocalStorage
});
