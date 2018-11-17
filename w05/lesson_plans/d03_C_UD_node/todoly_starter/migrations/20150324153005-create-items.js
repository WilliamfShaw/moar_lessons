"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("items").done(done);
  }
};