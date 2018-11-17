var loginTemplate;
var userTemplate;
var createUserTemplate;
var accountTemplate;
var updateTemplate;

$(function() {
	console.log('$€');
  loginTemplate = Handlebars.compile($('#login-template').html());
  userTemplate = Handlebars.compile($('#user-template').html());
  createUserTemplate = Handlebars.compile($('#create-user-template').html());
  accountTemplate = Handlebars.compile($('#account-template').html());
  updateTemplate = Handlebars.compile($('#update-template').html());

  renderStart();

  $('body').on('click', '#login-button', login);
  $('body').on('click', '#logout-button', logout);
  $('body').on('click', '#create-button', createUser);
  $('body').on('click', '#edit-button', editUserForm);
  $('body').on('click', '#update-button', updateUser);
  $('body').on('click', '#delete-button', deleteUser);
  $('body').on('click', '#deposit-button', depositAccount);
  $('body').on('click', '#withdraw-button', withdrawAccount);

});

var renderStart = function() {
	$('#user-accounts').empty();
	$('#user-access').empty();
	$('#user-access').append(loginTemplate);
	$('#user-access').append(createUserTemplate);
};

var createUser = function() {
  var username = $('#create-password').val();
  var password = $('#create-password').val();
  $.post('/users', {
    username: username,
    password: password
  })
  .done(function() {
	  	alert('Success!');
		  $('#create-username').val('');
		  $('#create-password').val('');
  })
  .fail(function() {
  		alert('Fail!');
  });
};

var editUserForm = function() {
	var id = $('#current-user').attr('data-userid');
	var username = $('#current-user').attr('data-username');
	var updateForm = updateTemplate({
		id: id,
		username: username
	});
	$('#user-accounts').empty();
	$('#user-accounts').html(updateForm);
};

var updateUser = function() {
	var id = $('#update-username').attr('data-userId');
	var username = $('#update-username').val();
  var password = $('#update-password').val();
  $.ajax({
  	url: '/users/' + id,
    method: 'PUT',
    data: {
    	username: username,
    	password: password
  	}
	})
  .done(renderUserAccounts)
  .fail(function(response) {
    var err = response.responseJSON;
    alert(err.err + ' - ' + err.msg);
  });
};

var login = function() {
  var username = $('#login-username').val();
  var password = $('#login-password').val();

  $.post('/sessions', {
    username: username,
    password: password
  })
  .done(renderUserAccounts)
  .fail(function(response) {
    var err = response.responseJSON;
    alert(err.err + ' - ' + err.msg);
  });
};

var logout = function() {
	$.ajax({
		method: 'DELETE',
		url: '/sessions'
	})
	.done(renderStart);
};

var deleteUser = function() {
	var id = $('#current-user').attr('data-userId');
	$.ajax({
		method: 'DELETE',
		url: '/users/' + id
	})
	.done(renderStart);
};


var renderUserAccounts = function(user) {
	var userId;
	isNaN(user) ? userId = user.id : userId = user;
	$.get('/users/' + userId)
		.done(function (fullUser) {
			$('#user-access').html(userTemplate(fullUser));
			$('#user-accounts').empty();
			fullUser.accounts.forEach(function(account) {
				$('#user-accounts').append(accountTemplate(account));
			});
		});
};

var depositAccount = function() {
	var deposit = parseInt($(this)
		.parent()
		.find('.deposit')
		.val());
	var userId = $('#current-user')
		.attr('data-userId');
	var currentBalance = parseInt($(this)
		.parent()
		.find('p')
		.text());
	var accountId = $(this)
		.parent()
		.attr('data-accountid');
	var newBalance = deposit + currentBalance;
	if (deposit >= 0) {
		$.ajax({
			url: '/users/' + userId + '/accounts/' + accountId,
			method: 'PUT',
			data: {
				balance: newBalance
			}
		})
		.done(function() {
			renderUserAccounts(userId);
		});
	}
};

var withdrawAccount = function() {
	var newBalance;
	var withdraw = parseInt($(this)
		.parent()
		.find('.withdraw')
		.val());
	var userId = $('#current-user')
		.attr('data-userId');
	var currentBalance = parseInt($(this)
		.parent()
		.find('p')
		.text());
	var accountId = $(this)
		.parent()
		.attr('data-accountid');
	var accountType = $(this)
		.parent()
		.attr('id');
	if (accountType === 'savings') {
		if (currentBalance - withdraw >= 0) {
			newBalance = currentBalance - withdraw;
		} else {
			alert('Not enough deposits for this transaction');
		}
	} else {
		if (currentBalance - withdraw >= 0) {
			newBalance = currentBalance - withdraw;
		} else {
			var overdraft = parseInt($(this)
				.parent()
				.parent()
				.find('#savings')
				.find('p')
				.text());
			if (currentBalance + overdraft - withdraw >= 0) {
				newBalance = 0;
				var overDraftId = $(this)
					.parent()
					.parent()
					.find('#savings')
					.attr('data-accountId');
				var newSavingsBalance = overdraft - withdraw + currentBalance;
				$.ajax({
					url: '/users/' + userId + '/accounts/' + overDraftId,
					method: 'PUT',
					data: {
						balance: newSavingsBalance
					}
				});
			} else {
				alert('Not enough deposits for this transaction');
			}
		}
	}
	$.ajax({
		url: '/users/' + userId + '/accounts/' + accountId,
		method: 'PUT',
		data: {
			balance: newBalance
		}
	})
	.done(function() {
		renderUserAccounts(userId);
	});
};




