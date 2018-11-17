"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    has_glasses: DataTypes.BOOLEAN
  },
  {
    timestamps: false
  });
  return users;
};