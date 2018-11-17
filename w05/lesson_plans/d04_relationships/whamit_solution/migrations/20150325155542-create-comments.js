"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      content: {
        type: DataTypes.TEXT
      },
      author: {
        type: DataTypes.STRING
      },
      channel_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("comments").done(done);
  }
};
