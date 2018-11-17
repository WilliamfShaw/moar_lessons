"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("shows_artists", {
      show_id: {
        type: DataTypes.INTEGER
      },
      artist_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("shows_artists").done(done);
  }
};
