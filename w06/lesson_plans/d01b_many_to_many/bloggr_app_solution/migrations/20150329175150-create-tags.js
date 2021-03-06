"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("tags").done(done);
  }
};
