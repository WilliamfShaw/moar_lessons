"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    poops: {
    	type: DataTypes.INTEGER,
    	defaultValue: 0
    }
  }, {
  	underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};