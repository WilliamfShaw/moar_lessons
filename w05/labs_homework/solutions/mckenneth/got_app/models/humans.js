"use strict";
module.exports = function(sequelize, DataTypes) {
  var humans = sequelize.define("humans", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    house_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        humans.hasMany(models.weapons, {
          foreignKey: 'human_id',
          onDelete: 'cascade',
          hooks: true
        });
        humans.belongsTo(models.houses, { foreignKey: 'house_id' });
      }
    }
  });
  return humans;
};