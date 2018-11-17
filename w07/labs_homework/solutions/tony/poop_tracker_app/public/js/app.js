var loginTemplate;
var userTemplate;

$(function() {
  loginTemplate = Handlebars.compile($('#login-template').html());
  userTemplate = Handlebars.compile($('#user-template').html());
  createUserTemplate = Handlebars.compile($('#create-user-template').html());

  fetchAndRenderSession();

  $('body').on('click', '#login-button', login);
  $('body').on('click', '#logout-button', logout);
  $('body').on('click', '#poop-button', addAPoop);
  $('body').on('click', '#create-button', createUser);
});

var fetchAndRenderUsers = function() {
  $.get('/users').done(renderUsers);
};

var renderUsers = function(users) {
  $('#users').empty();
  users.forEach(renderUser);
};

var renderUser = function(user) {
	var poops;
	(user.poops === 1) ? poops = ' Poop' : poops = ' Poops';
  $('#users').append(
    $('<li>').append(user.username + ' - ' + user.poops + poops)
  );
};

var fetchAndRenderSession = function() {
  $.get('/current_user').done(function(user) {
    if (user) {
    	$('#create-user').empty();
      $('#session').html(userTemplate(user));
      fetchAndRenderUsers();
    } else {
      $('#session').html(loginTemplate());
      $('#create-user').html(createUserTemplate());
    }
  }).fail(function(jqXHR) {
    if (jqXHR.status === 404) {
      $('#session').html(loginTemplate());
    }
  });
};

var createUser = function() {
	var username = $('#create-username').val();
	var password = $('#create-password').val();

	$.post('/users', {
		username: username,
		password: password
	}).done(function() {
		alert('Success!');
		$('#create-username').val('');
		$('#create-password').val('');
	}).error(function(response, stuff) {
		var err = response.responseJSON;
		alert(err.err + ' - ' + err.msg);
	})
}

var login = function() {
  var username = $('#login-username').val();
  var password = $('#login-password').val();

  $.post('/sessions', {
    username: username,
    password: password
  }).done(function(){
  	fetchAndRenderSession();
  	fetchAndRenderUsers();
  }).fail(function(response) {
    var err = response.responseJSON;
    alert(err.err + ' - ' + err.msg);
  });
};

var logout = function() {
  $.ajax({
    url: '/sessions',
    method: 'DELETE',
  }).done(function() {
  	fetchAndRenderSession();
  	$('#users').empty();
  });
};

var addAPoop = function() {
	$.ajax({
		url: '/users/log_poop',
		method: 'PUT'
	}).done(function() {
    alert('Success!');
    fetchAndRenderUsers();
  }).error(function(response, stuff) {
    var err = response.responseJSON;
    alert(err.err + ' - ' + err.msg);
  });
};
