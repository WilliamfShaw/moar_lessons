"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("houses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      sigil: {
        type: DataTypes.STRING
      },
      region: {
        type: DataTypes.STRING
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("houses").done(done);
  }
};