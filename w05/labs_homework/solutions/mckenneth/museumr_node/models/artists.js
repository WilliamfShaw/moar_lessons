"use strict";

module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define('artists', {
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  }, {
    underscored: true, 
    classMethods: {
      associate: function (models) {
        Artist.hasMany(models.paintings, {foreignKey: 'artist_id', onDelete: 'cascade'});
      }
    }

  });
  return Artist;
};