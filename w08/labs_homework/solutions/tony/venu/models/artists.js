"use strict";
module.exports = function(sequelize, DataTypes) {
  var artists = sequelize.define("artists", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    gross_earnings: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          artists.belongsToMany(models.shows, {
          through: 'shows_artists',
          foreignKey: 'artist_id'
        });
      }
    }
  });
  return artists;
};