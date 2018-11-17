var pokeArray = require('./poke_array')
var models = require("./models");
var Pokemon = models.pokemon;

var seedDatabase = function () {
  for ( var i = 0;i < pokeArray.length;i++ ) {
    var pokemon = pokeArray[i];
    var name = pokemon.name;
    var img_url = pokemon.img;
    var hp = pokemon.stats.hp;
    var attack = pokemon.stats.attack;
    var defense = pokemon.stats.defense;
    var speed = pokemon.stats.speed;
    var classification = pokemon.misc.classification;
    var height = pokemon.misc.height;
    var happiness = pokemon.misc.happiness;
    var species = pokemon.type.join(" | ")
    var moves = pokemon.moves.level.map(function(element){ return element.name; }).join(" | ")

    Pokemon.create({
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      moves: moves,
      img_url: img_url,
      classification: classification,
      species: species,
      height: height,
      happiness: happiness
    })
  }
}

seedDatabase();