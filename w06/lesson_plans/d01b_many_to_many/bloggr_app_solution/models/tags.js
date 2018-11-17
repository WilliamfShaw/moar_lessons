"use strict";
module.exports = function(sequelize, DataTypes) {
  var tags = sequelize.define("tags", {
    name: DataTypes.STRING,
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        tags.belongsToMany(models.posts, {
          through: 'posts_tags',
          foreignKey: 'tag_id'
        });
      }
    }

  });
  return tags;
};
