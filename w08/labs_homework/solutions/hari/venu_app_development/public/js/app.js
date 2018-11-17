$(function() {
	console.log('Loaded, bro.');
	$('#artist').on('click', renderArtistForm);
	$('#event').on('click', renderEventForm);
	$('#venue').on('click', renderVenueForm);
	$('#container').on('click', 'button', newEntry);
	$('span').on('click', colorRed);
});

var renderEventForm = function() {
	$('#errors').empty();
  console.log('Hello');
	$.get('/venues')
	.done(function(venues) {
		var eventTemplate = Handlebars.compile($('#new-event-template').html());
		$('#container').html(eventTemplate(venues));
	});
};

var renderArtistForm = function() {
	$('#errors').empty();
	var artistTemplate = Handlebars.compile($('#new-artist-template').html());
	$('#container').html(artistTemplate());
};

var renderVenueForm = function() {
	$('#errors').empty();
	var venueTemplate = Handlebars.compile($('#new-venue-template').html());
	$('#container').html(venueTemplate());
};

var newEntry = function() {
	var resource = this.id;
	$.post('/' + resource, $('input, select').serialize())
	.fail(function(err) {
		var string = '';
		err.responseJSON.err.forEach(function(error) {
			string += '<li>' + error + '</li>';
		});
		$('#errors').html(string);
	})
	.done(function(newEntry) {
		console.log(newEntry);
		$('#errors').empty();
		$('input').val('');
	});
};

var colorRed = function() {
	$('#current').removeAttr('id','current');
	this.id = 'current';
};

