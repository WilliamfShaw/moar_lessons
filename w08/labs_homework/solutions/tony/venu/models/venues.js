"use strict";
module.exports = function(sequelize, DataTypes) {
  var venues = sequelize.define("venues", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    booking_manager: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
  	underscored: true,
    classMethods: {
      associate: function(models) {
        venues.hasMany(models.shows, {
        	foreignKey: 'venue_id',
        	onDelete: 'cascade',
        	hooks: true
      	})
      }
    }
  });
  return venues;
};
