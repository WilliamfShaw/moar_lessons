"use strict";
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {

    name: DataTypes.STRING,

    age: DataTypes.INTEGER,

    favoriteColor: {
      type: DataTypes.STRING,
      field: 'favorite_color'
    }

  }, {

    timestamps: false,

    classMethods: {

      associate: function(models) {
        // associations can be defined here
      }
    }
    
  });
  return user;
};
