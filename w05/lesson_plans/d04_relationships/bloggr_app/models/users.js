"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {

    name: DataTypes.STRING,

    age: DataTypes.INTEGER,

    favorite_food: DataTypes.STRING

  }, {

    timestamps: false,

    classMethods: {

      associate: function(models) {
        User.hasMany(models.posts, { foreignKey: 'user_id' });
      }
    },

    instanceMethods: {

      getInfo: function() {
        return this.get('name') + ' is: ' + this.get('age');
      }

    }

  });
  return User;
};
