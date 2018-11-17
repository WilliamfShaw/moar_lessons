$(function() {
	weatherTemplate = Handlebars.compile( $('#weather-template').html() );

	$('#search-box').on('click', '#submit', getWeather);

});

var weatherTemplate;
var getWeather = function() {
	var location = encodeURI( $('[name="search"]').val() );

	var selectedTemp = $('#temp-scale').val();

	var tempScale = {
		metric: '&units=metric',
		imperial: '&units=imperial',
		internal: ''
	}[selectedTemp];

	var apiRoot = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var compiledQuery = apiRoot + location + tempScale;

	$.ajax({
		url: compiledQuery,
		method: 'GET',
		crossDomain: true,
		withCredentials: true
	})
	.done(function(response) {
		$('#weather-display').html(weatherTemplate(response));
	});

};