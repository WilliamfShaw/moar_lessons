"use strict";
module.exports = function(sequelize, DataTypes) {
  var items = sequelize.define("items", {
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return items;
};