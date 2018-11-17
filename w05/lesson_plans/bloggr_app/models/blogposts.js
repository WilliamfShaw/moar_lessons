"use strict";
module.exports = function(sequelize, DataTypes) {
  var blogposts = sequelize.define("blogposts", {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    classMethods: {
      associate: function(models) {
        blogposts.belongsTo( models.users, { foreignKey: { name: 'user_id' } } )
      }
    }
  });
  return blogposts;
};