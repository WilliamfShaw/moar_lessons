"use strict";

module.exports = function(sequelize, DataTypes) {
  var Painting = sequelize.define('paintings', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,
    year_made: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER,
  }, {
    underscored: true, 
    classMethods: {
      associate: function(models) {
        Painting.belongsTo(models.artists, {foreignKey: 'artist_id'})
      }
    }
  });
  return Painting;
};