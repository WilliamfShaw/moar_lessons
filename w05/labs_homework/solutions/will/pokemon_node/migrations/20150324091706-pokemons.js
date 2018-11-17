"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('pokemons', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        hp: DataTypes.INTEGER,
        attack: DataTypes.INTEGER,
        defense: DataTypes.INTEGER,
        speed: DataTypes.INTEGER,
        moves: DataTypes.STRING,
        img_url: DataTypes.STRING,
        classification: DataTypes.STRING,
        species: DataTypes.STRING,
        height: DataTypes.STRING,
        happiness: DataTypes.INTEGER,
        createdAt: {
          type: DataTypes.DATE, 
          field: 'created_at'
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      });
      done();
    },

    down: function(migration, DataTypes, done) {
      migration.dropTable('pokemons');
      done();
    }
  };