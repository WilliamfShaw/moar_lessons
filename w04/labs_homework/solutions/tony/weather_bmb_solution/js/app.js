var searchTerm;

$(function() {
  console.log("Loaded, bro.");
  // These are my events
  $('#london').on('click', function() { getWeather('london-uk'); });
  $('#new-york').on('click', function() { getWeather('new-york'); });
  $('#tokyo').on('click', function() { getWeather('tokyo'); });
  $('#sydney').on('click', function() { getWeather('sydney-aus'); });

  $('#search-input').keypress(function(e) {
    if (e.which === 13) {
      customWeather();
    }
  });
  $('#search-button').click(customWeather);
  hideResults();
});

var getWeather = function(search) {
  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    // Parameters may also by place into an object called data
    data: {
      q: search,
      units: 'imperial'
    },
    dataType: 'json',
    method: 'GET'
  })
  .done(renderWeather)
};

var customWeather = function() {
  // I used line 38 to remove spaces when cities are input.  
  getWeather($('#search-input').val().replace(' ','-'));
  $('#search-input').val('');
};

var emptyWeather = function() {
  // Clear the results modal of weather info.  
  $('#results').empty();
}

var renderWeather = function(weatherReport) {
  emptyWeather();
  // This function builds a div full of weather data.
  var weatherDiv = $('<div>').addClass('weather');
  var cityName = $('<p>').text(weatherReport.name);
  var temperature = $('<p>').text(
    Math.round(weatherReport.main.temp) + " F"
  );
  var description = $('<p>').text(
    weatherReport.weather[0].main
  );
  var lat = weatherReport.coord.lat;
  var lon = weatherReport.coord.lon;
  weatherDiv.append(cityName)
            .append(temperature)
            .append(description);
  $('#results').append(weatherDiv);
  // I also added the gifs and maps here.  
  getGif(cityName.text());
  getGif(description.text());
  makeMap(lat, lon);
  // and make the modal show below
  $('#results').show();
};
// to hide the modal
var hideResults = function() {
  $('#results').on('click', function() {
    $('#results').hide();
  })
};

var getGif = function(search) {
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      api_key: 'dc6zaTOxFJmzC',
      q: search,
      limit: 1,
      // Just used this to get one of the top - 5 gifs
      // from giphy from a certain search work
      offset: Math.floor((Math.random() * 5) + 1)
    },
    dataType: 'json',
    method: 'GET'
  })
  .done(renderGif);
}

var renderGif = function(gif) {
  // the gif I want to access lives at this level
  // of the response object.  
  var gifData = gif['data'][0];  
  // this builds out the gifs with the mouseover feature. 
  // and makes new gif divs.
  var gifDiv = $('<div>').addClass('gif');

  var img = $('<img>').data('still-url', gifData.images.original_still.url)
            .data('url', gifData.images.original.url)
            .attr('src', gifData.images.original_still.url)

  img.on('mouseenter', function() {
    $(this).attr('src', $(this).data('url'));
  });

  img.on('mouseleave', function() {
    $(this).attr('src', $(this).data('still-url'));
  });

  img.appendTo(gifDiv);
  $('#results').append(gifDiv);
};

var makeMap = function(lat, lon) {
  // make the map bonus.  
  var mapString = [
    'https://maps.googleapis.com/maps/api/staticmap?',
    'center=',
    lat,
    ',',
    lon,
    '&zoom=10&size=1000x1000&maptype=roadmap'
  ].join('');
  var map = $('<img>').attr('src', mapString);
  $('#results').css('background-image', 'url(' + mapString + ')');
}
