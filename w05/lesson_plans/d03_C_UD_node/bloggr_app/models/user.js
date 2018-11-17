"use strict";
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {

    name: DataTypes.STRING,

    age: DataTypes.INTEGER,

    favorite_food: DataTypes.STRING

  }, {

    timestamps: false,

    classMethods: {

      associate: function(models) {
        // associations can be defined here
      }
    },

    instanceMethods: {

      getInfo: function() {
        return this.get('name') + ' is: ' + this.get('age');
      }

    }

  });
  return user;
};
