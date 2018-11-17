"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: DataTypes.STRING,
    password_digest: DataTypes.STRING
  }, {

    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        users.hasMany(models.accounts, {
          foreignKey: 'user_id',
          onDelete: 'cascade',
          hooks: true
        })
      }
    }
  });
  return users;
};