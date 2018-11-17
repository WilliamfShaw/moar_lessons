var whamterestLocalStorage = new Backbone.LocalStorage('postdb');

var PostsCollection  = Backbone.Collection.extend({
	counter: 0,
	initialize: function () {
		console.log("New Post Collection Made Bro");
	},
	next: function () {
		this.counter++;
		if ( this.counter >= this.length ){
			this.counter = 0;
		}
		return this.at(this.counter);
	},
	back: function () {
		this.counter--;
		if ( this.counter < 0 ) {
			this.counter = this.length - 1;
		}
		return this.at( this.counter );
	},
	model: Post,
	localStorage: whamterestLocalStorage
});
