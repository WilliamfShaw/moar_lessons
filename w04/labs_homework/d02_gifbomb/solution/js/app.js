var searchTerm;
var offset;

$(function() {
  console.log("Loaded, bro.");

  $('#cats').on('click', function() { getGifs('cats'); });
  $('#dogs').on('click', function() { getGifs('dogs'); });
  $('#pokemons').on('click', function() { getGifs('pokemons'); });
  $('#pandas').on('click', function() { getGifs('pandas'); });

  $('#search-input').keypress(function(e) {
    if (e.which === 13) {
      customSearch();
    }
  });
  $('#search-button').click(customSearch);
});

var customSearch = function() {
  getGifs(encodeURI($('#search-input').val()));
  $('#search-input').val('');
};

var giphyData = function() {
  // with a get, can this hash be sent along AND
  // respond easily with all search parameters?
  return {
    api_key: 'dc6zaTOxFJmzC',
    q: searchTerm,
    limit: 3,
    offset: offset
  }
};

var getGifs = function(search) {
  searchTerm = search;
  offset = 0;
  $.ajax({
    url: 'http://api.giphy.com/v1/stickers/search',
    data: giphyData(),
    dataType: 'json',
    method: 'GET'
  }).done(function( data ) {
    emptyGifs();
    renderGifs(data['data']);
    $(window).on('scroll', function() {
      console.log($(window).scrollTop())
      console.log($(window).height())
      console.log($(document).height())
      if($(window).scrollTop() + 300 > $(document).height()) {
        loadMoar()
      }
    });
    // $('<button>').text('Moar Gifs')
    //              .attr('id', 'moar')
    //              .click(loadMoar)
                 // .appendTo($('#results').parent());
  });
};

var renderGifs = function(gifs) {
  gifs.forEach(function(gif) {
    renderGif(gif).appendTo($('#results'));
  });
};

var renderGif = function(gif) {
  var gifDiv = $('<div>').addClass('gif');

  var img = $('<img>').data('still-url', gif.images.fixed_width_still.url)
            .data('url', gif.images.fixed_width.url)
            .attr('src', gif.images.fixed_width_still.url)

  img.on('mouseenter', function() {
    $(this).attr('src', $(this).data('url'));
  });

  img.on('mouseleave', function() {
    $(this).attr('src', $(this).data('still-url'));
  });

  img.appendTo(gifDiv);
  return gifDiv;
};

var emptyGifs = function() {
  $('#results').empty();
  $('#moar').remove();
};

var loadMoar = function() {
  offset += 3;
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'GET',
    data:  giphyData(),
    dataType: 'json'
  }).done(function(data) {
    renderGifs(data['data']);
  });
}
