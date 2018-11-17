"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("shows", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.STRING
      },
      venue_id: {
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("shows").done(done);
  }
};