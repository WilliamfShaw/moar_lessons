App.Views.Login = Backbone.View.extend({
	
	el: '#login-form',

	events: {
		'click #sign-up': 'signUp',
		'click #login': 'login'
	},

	signUp: function() {
		$.ajax({
			method: 'POST',
			url: '/users',
			data: {
				user: {
					username: $('#username').val(),
					password: $('#password').val()
				}
			},
			success: function(data) {
		  	alert("User Created");
		  },
		  error: function(data) {
		  	alert("fail");
		  	$('#username').val() = '';
				$('#password').val() = '';
		  }
		})
	},

	login: function() {
		$.ajax({
			method: 'POST',
			url: '/sessions',
			data: {
				username: $('#username').val(),
				password: $('#password').val()
			},
			success: function(data) {
		  	alert("You are logged in!");
		  	App.Views.loginView.$el.hide();
		  	$('#username').val('');
				$('#password').val('');
		  	App.Views.searchFormView.render();
		  },
		  error: function(data) {
		  	alert(data.responseJSON.error);
		  }
		})
	}
})
