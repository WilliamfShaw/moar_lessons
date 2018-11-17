"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    favorite_food: DataTypes.STRING
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        users.hasMany(models.posts, { foreignKey: 'user_id' });
      }
    }

  });
  return users;
};
