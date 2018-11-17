var baseUrl = 'http://pokeapi.co';
var pokedexPath = '/api/v1/pokedex/1';
var pokemonPath = function(id) {
  return '/api/v1/pokemon/' + id;
};
var imagePath = function(id) {
  return '/api/v1/sprite/' + id;
};
var movePath = '/api/v1/move/?limit=0';
var typePath = '/api/v1/type/?limit=0';

$(function() {
  console.log('Loaded, bro.');
  $('#pokemons').on('click', getAllPokemon);
  $('#moves').on('click', getAllMoves);
  $('#types').on('click', getAllTypes);
  $('#menu').on('click', '.pokeitem', getOnePokemon);
  $('#menu').on('click', '.moveitem', getOneMove);
  $('#menu').on('click', '.typeitem', getOneType);
});

var getAllPokemon = function() {
  var menu = $('#menu');
  var pokeitemTemplate = Handlebars.compile($('#pokeitem-template').html());

  $.ajax({
    url: baseUrl + pokedexPath,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    var pokemons = data["pokemon"];
    pokemons.sort(function(a, b) {
      return getIdFromPath(a["resource_uri"]) - getIdFromPath(b["resource_uri"]);
    });
    menu.empty();

    for (var i = 0; i < pokemons.length; i++) {

      var pokemon = pokemons[i];
      var name = pokemons[i]["name"];
      var path = pokemons[i]["resource_uri"];
      var pokedata = {
        name: name,
        path: path
      };

      menu.append(pokeitemTemplate(pokedata));
    }
  });
}

var getOnePokemon = function() {
  var path = $(this).data('path');
  $.ajax({
    url: baseUrl + '/' + path,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {

    var detail = $('#detail');
    var pokedetailTemplate = Handlebars.compile($('#pokedetail-template').html());
    var pokedata = {
      name: data["name"],
      attack: data["attack"],
      defense: data["defense"],
      splAttack: data["sp_atk"],
      splDefense: data["sp_def"],
      speed: data["speed"],
      types: getTypeString(data["types"])
    };

    detail.html(pokedetailTemplate(pokedata));

    renderImage(data["sprites"][0]["resource_uri"]);
  });
};

var getAllMoves = function() {
  var menu = $('#menu');
  var moveitemTemplate = Handlebars.compile($('#moveitem-template').html());

  $.ajax({
    url: baseUrl + movePath,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    menu.empty();
    var moves = data["objects"];
    for (var i = 0; i < moves.length; i++) {

      var pokemon = moves[i];
      var name = moves[i]["name"];
      var path = moves[i]["resource_uri"]
      var movedata = {
        name: name,
        path: path
      };

      menu.append(moveitemTemplate(movedata));
    }
  });
};

var getOneMove = function() {
  var path = $(this).data('path');
  $.ajax({
    url: baseUrl + path,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    var detail = $('#detail');
    var movedetailTemplate = Handlebars.compile($('#movedetail-template').html());
    var movedata = {
      name: data["name"],
      description: data["description"],
      power: data["power"],
      accuracy: data["accuracy"],
      pp: data["pp"]
    };

    detail.html(movedetailTemplate(movedata));
  });
};

var getAllTypes = function() {
  var menu = $('#menu');
  var typeitemTemplate = Handlebars.compile($('#typeitem-template').html());

  $.ajax({
    url: baseUrl + typePath,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    menu.empty();
    var types = data["objects"];
    for (var i = 0; i < types.length; i++) {

      var pokemon = types[i];
      var name = types[i]["name"];
      var path = types[i]["resource_uri"]
      var typedata = {
        name: name,
        path: path
      };

      menu.append(typeitemTemplate(typedata));
    }
  });
};

var getOneType = function() {
  var path = $(this).data('path');
  $.ajax({
    url: baseUrl + path,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    var detail = $('#detail');
    var typedetailTemplate = Handlebars.compile($('#typedetail-template').html());
    var typedata = {
      name: data["name"],
      supereffective: getTypeString(data["super_effective"]),
      ineffective: getTypeString(data["ineffective"]),
      noEffect: getTypeString(data["no_effect"]),
      resistance: getTypeString(data["resistance"]),
      weakness: getTypeString(data["weakness"])
    };

    detail.html(typedetailTemplate(typedata));
  });
};

var getIdFromPath = function(path) {
  var elements = path.split('/');
  return parseInt(elements[elements.length - 2]);
};

var getTypeString = function(types) {
  if (types.length === 0) {
    return '-';
  }

  return types.map(function(type) {
    return type["name"];
  }).join(', ');
};

var renderImage = function(path) {
  $.ajax({
    url: baseUrl + path,
    method: 'GET',
    dataType: 'json'
  }).done(function(data) {
    $('#detail-image').attr('src', baseUrl + data["image"]);
  });
};
