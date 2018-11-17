"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("artists_events", {
      artist_id: {
        type: DataTypes.INTEGER,
      },
      event_id: {
        type: DataTypes.INTEGER,
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
    migration.dropTable("artists_events").done(done);
  }
};
