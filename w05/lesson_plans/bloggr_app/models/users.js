"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    favorite_color: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    classMethods: {
      associate: function(models) {
        users.hasMany(models.blogposts, { foreignKey: { name: 'user_id' } })
      }
    }
  });
  return users;
};