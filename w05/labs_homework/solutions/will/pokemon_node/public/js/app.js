console.log("loaded bro");
$(function() {
  $('#logo').on('click', getPokemons)
  $('#results-container').on('click', '.result', getOnePokemon)
  $("#solo-pokemon").on('click', function () {
    $("#solo-pokemon").hide();
  })
  $("#search-by-name").on('click', searchPokemonByName)
  $("#search-by-type").on('click', searchPokemonByType)
  $("#random-button").on('click', getRandomPokemon)
})


var getPokemons = function() {
  $.ajax({
    url: '/pokemons',
    method: "GET",
    dataType: 'json'
  }).done(renderAll)
};

var renderAll = function(data) {
  var resultsDiv = $("#results-container")
  resultsDiv.empty();
  var pokeTemplate = Handlebars.compile($("#pokemons-template").html());
  for (var i = 0; i < data.length; i++) {
    var pokemon = {
      id: data[i].id,
      name: data[i].name,
      img: data[i].img_url
    }
    resultsDiv.append(pokeTemplate(pokemon))
  }
  resultsDiv.show();
};

var getOnePokemon = function () {
  var id = $(this).closest(".result").attr("data-id");
  $.ajax({
    url: "/pokemons/" + id,
    method: "GET",
    dataType: "json"
  }).done(renderOne)
};

var searchPokemonByName = function () {
  console.log("got here");
  var searchVal = $("#search-name-field").val();
  $("#search-name-field").val('')
  $.ajax({
    url: "/pokemons/searchByName", 
    data: {name: searchVal},
    method: "GET",
    dataType: "json"
  }).done(renderOne)
};

var searchPokemonByType = function () {
  var searchVal = $("#search-type-field").val()
  $("#search-type-field").val('')
  $.ajax({
    url: "/pokemons/searchByType",
    data: {classification: searchVal},
    method: "GET",
    dataType: "json"
  }).done(renderAll)
};

var getRandomPokemon = function () {
  var id = Math.floor(Math.random() * 151) + 1
  $.ajax({
    url: "/pokemons/random",
    data: {id: id},
    method: "GET",
    dataType: "json"
  }).done(renderOne)
}

var renderOne = function (data) {
  var showDiv = $("#solo-pokemon");
  showDiv.empty();
  var pokeTemplate = Handlebars.compile($("#pokeShow-template").html())
  var pokemonData = {
    name: data.name,
    img: data.img_url,
    species: data.species,
    classification: data.classification,
    hp: data.hp,
    attack: data.attack,
    defense: data.defense,
    moves: data.moves,
    happiness: data.happiness,
    height: data.height
  }
  showDiv.append(pokeTemplate(pokemonData));
  showDiv.show();
}
















