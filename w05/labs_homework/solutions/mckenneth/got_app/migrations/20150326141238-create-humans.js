"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("humans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      status: {
        type: DataTypes.BOOLEAN
      },
      house_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("humans").done(done);
  }
};