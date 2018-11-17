"use strict";
module.exports = function(sequelize, DataTypes) {
  var employees = sequelize.define("employees", {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return employees;
};