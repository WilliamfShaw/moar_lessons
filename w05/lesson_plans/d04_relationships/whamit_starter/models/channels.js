"use strict";
module.exports = function(sequelize, DataTypes) {
  var channels = sequelize.define("channels", {
    name: DataTypes.TEXT
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
    
  });
  return channels;
};
