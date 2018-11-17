"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("weapons", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      material: {
        type: DataTypes.STRING
      },
      damage: {
        type: DataTypes.INTEGER
      },
      accuracy: {
        type: DataTypes.INTEGER
      },
      human_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("weapons").done(done);
  }
};