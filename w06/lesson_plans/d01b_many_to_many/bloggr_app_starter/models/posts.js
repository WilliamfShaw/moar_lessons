"use strict";
module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define("posts", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        posts.belongsTo(models.users, { foreignKey: 'user_id' });
      }
    }
  });
  return posts;
};
