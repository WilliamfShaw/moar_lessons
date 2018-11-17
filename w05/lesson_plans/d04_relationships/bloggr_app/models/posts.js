"use strict";
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("posts", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {

    underscored: true,

    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.users, { foreignKey: 'user_id' });
      }
    }
  });
  return Post;
};
