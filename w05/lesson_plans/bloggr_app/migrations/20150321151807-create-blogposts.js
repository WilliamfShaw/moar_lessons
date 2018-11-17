"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("blogposts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("blogposts").done(done);
  }
};