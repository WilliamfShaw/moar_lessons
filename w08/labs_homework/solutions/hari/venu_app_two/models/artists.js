"use strict";
module.exports = function(sequelize, DataTypes) {
  var artists = sequelize.define("artists", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Name cannot be blank' }
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Rock', 'Pop', 'Jazz', 'Hiphop', 'Metal', 'EDM', 'Dubstep']],
          msg: 'Genre must be one of the following: "Rock", "Pop", "Jazz", "Hiphop", "Metal", "EDM", "Dubstep"'
        }
      }
    },
    gross_earnings: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: { msg: 'Gross earnings must be an integer' },
        min: { args: [1], msg: 'Gross earnings must be greater than 0' }
      }
    }
  }, {

    underscored: true,

    classMethods: {
      associate: function(models) {
        artists.belongsToMany(models.events, {
          through: 'artists_events',
          foreignKey: 'artist_id'
        });
      },

      findByGenre: function(genreArray) {
      	return artists
      		.findAll({
      			where: {
      				genre: {
      					in: genreArray
      				}
      			}
      		});
      }
    }
  });
  return artists;
};
