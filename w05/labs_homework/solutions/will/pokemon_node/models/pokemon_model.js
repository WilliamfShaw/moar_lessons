"use strict";

module.exports = function (sequelize, DataTypes) {
  var Pokemon = sequelize.define('pokemon', {
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
    }
  });
  return Pokemon;
}
