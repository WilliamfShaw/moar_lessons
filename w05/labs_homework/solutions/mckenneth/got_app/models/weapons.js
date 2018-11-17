"use strict";
module.exports = function(sequelize, DataTypes) {
  var weapons = sequelize.define("weapons", {
    name: DataTypes.STRING,
    material: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER,
    human_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        weapons.belongsTo(models.humans, { foreignKey: 'human_id' });
      }
    }
  });
  return weapons;
};