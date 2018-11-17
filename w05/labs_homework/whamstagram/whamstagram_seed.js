var models = require("./models");
var Photo = models.photo;

var seedArr = [
  {
    poster: 'Hari',
    img_url: 'http://lorempixel.com/300/300/cats/',
    caption: 'Catz are rad.'
  },
  {
    poster: 'McKenneth',
    img_url: 'http://lorempixel.com/300/300/food/',
    caption: 'Better than a Lunchable!'
  },
  {
    poster: 'Tony',
    img_url: 'http://lorempixel.com/300/300/animals/',
    caption: 'This is a zebra I saw while on safari.'
  },
  {
    poster: 'Will',
    img_url: 'http://lorempixel.com/300/300/food/',
    caption: 'Greet Suite Meets I Eats!'
  }
]

var seedDatabase = function () {
  seedArr.forEach( function(seed) {
    Photo.create({
      poster: seed.poster,
      img_url: seed.img_url,
      caption: seed.caption
    })
  });
}

seedDatabase();