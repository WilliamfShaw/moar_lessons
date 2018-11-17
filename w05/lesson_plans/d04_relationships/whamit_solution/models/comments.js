"use strict";
module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define("comments", {
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
    channel_id: DataTypes.INTEGER,
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        comments.belongsTo(models.channels, { foreignKey: 'channel_id' });
      }
    }
  });
  return comments;
}
