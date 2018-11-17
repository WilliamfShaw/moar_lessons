"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("venues", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        unique: true
      },
      address: {
        type: DataTypes.TEXT
      },
      city: {
        type: DataTypes.STRING
      },
      booking_manager: {
        type: DataTypes.STRING
      },
      capacity: {
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
    migration.dropTable("venues").done(done);
  }
};
