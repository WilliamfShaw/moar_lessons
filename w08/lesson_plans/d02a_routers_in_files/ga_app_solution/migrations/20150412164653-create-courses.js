"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      length: {
        type: DataTypes.INTEGER
      },
      category: {
        type: DataTypes.STRING
      },
      start_date: {
        type: DataTypes.DATE
      },
      end_date: {
        type: DataTypes.DATE
      },
      capacity: {
        type: DataTypes.INTEGER
      },
      campus_id: {
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
    migration.dropTable("courses").done(done);
  }
};