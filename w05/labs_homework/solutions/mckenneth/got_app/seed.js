// John Sanders
// (c) 2015

var models = require('./models');
var House = models.houses;
var Human = models.humans;
var Weapon = models.weapons;

var houses = [
  {
    name:   'Lannister',
    sigil:  'http://3.bp.blogspot.com/-JRmIOiu8o5M/T79k2V0m1QI/AAAAAAAAAA0/qN5AckDulnM/s1600/Game-of-thrones-wallpaper-house-lannister-sigil.jpg',
    region: 'Westerlands',
    humans: [
      {
        name: 'Jaime Lannister',
        age:  31,
        status: true,
        weapons: [
          {
            name: 'Longsword',
            material: 'Valyrian Steel',
            damage: 250,
            accuracy: 65
          }
        ]
      },
      {
        name: 'Cersei Lannister',
        age:  31,
        status: true,
        weapons: []
      },
      {
        name: 'Tywin Lannister',
        age:  60,
        status: false,
        weapons: [
          {
            name: 'Longsword',
            material: 'Valyrian Steel',
            damage: 100,
            accuracy: 70
          }
        ]
      },
      {
        name: 'Tyrion Lannister',
        age:  30,
        status: true,
        weapons: [
          {
            name: 'Crossbow',
            material: 'Wood',
            damage: 100,
            accuracy: 85
          },
          {
            name: 'Necklace Piano Wire',
            material: 'Gold',
            damage: 120,
            accuracy: 95
          }
        ]
      },
      {
        name: 'Joffrey baratheon',
        age:  15,
        status: false,
        weapons: [
          {
            name: 'Crossbow',
            material: 'Wood',
            damage: 12,
            accuracy: 80
          }
        ]
      }
    ]
  },
  {
    name:   'Tully',
    sigil:  'http://lounge.obviousmag.org/aquempossainteressar/wallpaper-tully-1600.jpg',
    region: 'Riverlands',
    humans: []
  },
  {
    name:   'Baratheon',
    sigil:  'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/baratheon/wallpaper-baratheon-sigil-1600.jpg',
    region: 'Stormlands',
    humans: [
      {
        name: 'Robert Baratheon',
        age:  65,
        status: false,
        weapons: [
          {
            name: 'Hunting Bow',
            material: 'Iron',
            damage: 100,
            accuracy: 50
          }
        ]
      }
    ]
  },
  {
    name:   'Arryn',
    sigil:  'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-arryn-1600.jpg',
    region: 'The Vale',
    humans: []
  },
  {
    name:   'Greyjoy',
    sigil:  'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-greyjoy-1600.jpg',
    region: 'Iron Islands',
    humans: [
      {
        name: 'Theon Greyjoy',
        age:  28,
        status: true,
        weapons: [
          {
            name: 'Sword',
            material: 'Steel',
            damage: 200,
            accuracy: 70
          }
        ]
      }
    ]
  },
  {
    name:   'Martell',
    sigil:  'http://i.imgur.com/9N4OiWw.jpg',
    region: 'Dorne',
    humans: [
      {
        name: 'Oberyn Martell',
        age:  28,
        status: false,
        weapons: [
          {
            name: 'Pike',
            material: 'Iron',
            damage: 600,
            accuracy: 90
          }
        ]
      }
    ]
  },
  {
    name:   'Targaryan',
    sigil:  'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/targaryen/wallpaper-targaryen-sigil-1600.jpg',
    region: 'Essos',
    humans: [
      {
        name: 'Daenerys Targaryan',
        age: 27,
        status: true,
        weapons: [
          {
            name: 'Dragons',
            material: 'Dragonite',
            damage: 1500,
            accuracy: 20
          }
        ]
      },
      {
        name: 'Viserys Targaryan',
        age:  28,
        status: false,
        weapons: []
      }
    ]
  },
  {
    name:   'Stark',
    sigil:  'http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-stark-1600.jpg',
    region: 'The North',
    humans: [
      {
        name: 'Ned Stark',
        age:  50,
        status: false,
        weapons: [
          {
            name: 'Broadsword',
            material: 'Steel',
            damage: 250,
            accuracy: 80
          }
        ]
      },
      {
        name: 'Robb Stark',
        age:  20,
        status: false,
        weapons: [
          {
            name: 'Longsword',
            material: 'Steel',
            damage: 300,
            accuracy: 75
          }
        ]
      },
      {
        name: 'Catelyn Stark',
        age:  49,
        status: false,
        weapons: []
      },
      {
        name: 'Brandon Stark',
        age:  12,
        status: true,
        weapons: []
      }
    ]
  },
]

var seedDatabase = function () {
  houses.forEach( function (houseData) {
    House
      .create({
        name:   houseData.name,
        sigil:  houseData.sigil,
        region: houseData.region
      })
      .then(function(house) {
        houseData.humans.forEach( function(humanData) {
          Human
            .create({
              name: humanData.name,
              age: humanData.age,
              status: humanData.status,
              house_id: house.id
            })
            .then(function(human) {
              humanData.weapons.forEach(function(weaponData) {
                Weapon
                  .create({
                    name: weaponData.name,
                    material: weaponData.material,
                    damage: weaponData.damage,
                    accuracy: weaponData.accuracy,
                    human_id: human.id
                  });
              });
            });
        });
      });
  });
}

House.destroy({ truncate: true }).then(function() {
  Human.destroy({ truncate: true }).then(function() {
    Weapon.destroy({truncate: true }).then(function() {
      seedDatabase();
    });
  });
});

// seedDatabase();
