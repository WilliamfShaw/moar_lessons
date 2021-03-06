"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("events", {
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
        type: DataTypes.DATE
      },
      duration: {
        type: DataTypes.INTEGER
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
    migration.dropTable("events").done(done);
  }
};
