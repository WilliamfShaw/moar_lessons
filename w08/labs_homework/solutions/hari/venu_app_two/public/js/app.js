$(function() {
	console.log('Loaded, bro.');
	$('#artist').on('click', renderArtistForm);
	$('#event').on('click', renderEventForm);
	$('#venue').on('click', renderVenueForm);
	$('#artists').on('click', renderAllArtists);
	$('#events').on('click', renderAllEvents);
	$('#upcoming-events').on('click', renderUpcomingEvents);
	$('#venues').on('click', renderAllVenues);
	$('#large-venues').on('click', renderLargeVenues);
	$('#container').on('click', 'button', newEntry);
	$('span.nav').on('click', colorRed);
	$('#container').on('click', '.info', getInfo);
});

var getInfo = function() {
	var url = $(this).data('url');
	console.log('hello');
	$.get(url).done(renderInfo);
};

var renderInfo = function(info) {
	alert(info.category + " event\n" + "Is the event upcoming: " + info.is_upcoming);
};

var renderArtists = function(artists) {
	$('#errors').empty();
	var artistsTemplate = Handlebars.compile($('#artists-template').html());
	$('#container').html(artistsTemplate(artists));
};

var renderAllArtists = function() {
	$.get('/artists').done(renderArtists);
};

var renderEvents = function(events) {
	$('#errors').empty();
	var eventsTemplate = Handlebars.compile($('#events-template').html());
	$('#container').html(eventsTemplate(events));
};

var renderAllEvents = function() {
	$.get('/events').done(renderEvents);
};

var renderUpcomingEvents = function() {
	$.get('/events/upcoming').done(renderEvents);
};

var renderVenues = function(venues) {
	$('#errors').empty();
	var venuesTemplate = Handlebars.compile($('#venues-template').html());
	$('#container').html(venuesTemplate(venues));
};

var renderAllVenues = function() {
	$.get('/venues').done(renderVenues);
};

var renderLargeVenues = function() {
	$.get('/venues/large').done(renderVenues);
};

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
