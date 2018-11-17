"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("channels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.TEXT
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("channels").done(done);
  }
};
