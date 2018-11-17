"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    
    migration.createTable('artists', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      img_url: DataTypes.STRING,
      nationality: DataTypes.STRING,
      birthYear: DataTypes.INTEGER,
      description: DataTypes.STRING(1234),
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });

    migration.createTable('paintings', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      img_url: DataTypes.STRING,
      year_made: DataTypes.INTEGER,
      artist_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });

    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('artists');
    migration.dropTable('paintings');
    done();
  }
};  
