"use strict";
module.exports = function(sequelize, DataTypes) {
  var houses = sequelize.define("houses", {
    name: DataTypes.STRING,
    sigil: DataTypes.STRING,
    region: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        houses.hasMany(models.humans, {
          foreignKey: 'house_id',
          onDelete: 'cascade',
          hooks: true
        });
      }
    }
  });
  return houses;
};