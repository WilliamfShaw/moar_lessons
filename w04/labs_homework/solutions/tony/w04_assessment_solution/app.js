$(function() {
  console.log("Loaded, bro.");
  $('#search-button').click(customSearch); 
  weatherTemplate = Handlebars.compile($('#weather-template').html());
});

var customSearch = function(citySearch) {
  var searchCity = encodeURI($('#search-input').val())
  getWeather(searchCity);
  $('#search-input').val('');
};

var getWeather = function(search) {
  var weatherURL = [
    'http://api.openweathermap.org/data/2.5/weather?q=',
    search, 
    '&units=imperial'
  ].join('');
  $.ajax({
    url: weatherURL,
    dataType: 'json',
    method: 'GET'
  })
  .done(renderWeather)
};

var renderWeather = function(data) {
  var weatherObj = {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    description: data.weather[0].description
  };
  $('#results').html(weatherTemplate(weatherObj));
};
