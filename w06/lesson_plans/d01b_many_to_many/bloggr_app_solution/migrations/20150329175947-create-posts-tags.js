"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("posts_tags", {
      post_id: {
        type: DataTypes.INTEGER
      },
      tag_id: {
        type: DataTypes.INTEGER
      }
    }).done(done);
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("posts_tags").done(done);
  }
};
