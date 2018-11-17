"use strict";
module.exports = function(sequelize, DataTypes) {
  var accounts = sequelize.define("accounts", {
    balance: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    account_type: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {

    underscored: true,

    classMethods: {
      associate: function(models) {
        accounts.belongsTo(models.users, { foreignKey: 'user_id' })
      }
    }
  });
  return accounts;
};