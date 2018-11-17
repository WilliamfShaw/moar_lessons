"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('photos', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        poster: DataTypes.STRING,
        img_url: DataTypes.STRING,
        caption: DataTypes.STRING,
        createdAt: {
          type: DataTypes.DATE, 
          field: 'created_at'
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      });
      done();
    },

    down: function(migration, DataTypes, done) {
      migration.dropTable('photos');
      done();
    }
  };