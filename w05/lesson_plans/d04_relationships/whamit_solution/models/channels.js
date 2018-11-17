"use strict";
module.exports = function(sequelize, DataTypes) {
  var channels = sequelize.define("channels", {
    name: DataTypes.TEXT
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        channels.hasMany(models.comments, { foreignKey: 'channel_id' });
      }
    }

  });
  return channels;
};
