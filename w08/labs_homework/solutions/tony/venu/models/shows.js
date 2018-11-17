"use strict";
module.exports = function(sequelize, DataTypes) {
  var shows = sequelize.define("shows", {
    name: DataTypes.STRING,
    date: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER
  }, {
  	underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        shows.belongsTo(models.venues, {
        	foreignKey: 'venue_id'
        });
        shows.belongsToMany(models.artists, {
          through: 'shows_artists',
          foreignKey: 'show_id'
        });
      }
    }
  });
  return shows;
};