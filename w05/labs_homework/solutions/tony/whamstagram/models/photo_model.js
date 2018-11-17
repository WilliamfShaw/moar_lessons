'use strict'

module.exports = function(sequelize, DataTypes) {
	var Photo = sequelize.define('photos', {
		//schema goes here
		poster: DataTypes.STRING,
		img_url: DataTypes.STRING,
		caption: DataTypes.STRING,
		createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    }
	});
	return Photo;
}
