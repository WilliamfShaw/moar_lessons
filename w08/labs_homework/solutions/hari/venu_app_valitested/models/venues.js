"use strict";
module.exports = function(sequelize, DataTypes) {
  var venues = sequelize.define("venues", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Name cannot be blank' }
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Address cannot be blank' }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'City cannot be blank' }
      }
    },
    booking_manager: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: { msg: 'Capacity must be a number' },
        min: { args: [1], msg: 'Capacity must be greater than 0' }
      }
    }
  }, {

    underscored: true,
		
		instanceMethods: {
			info: function() {
				var infoString = this.name + ' is located on '  + this.address + ' in ' + this.city + '.';
				if (this.booking_manager) { infoString += ' The booking manager is ' + this.booking_manager + '.';}
				return infoString;
			}
		},

    classMethods: {
      associate: function(models) {
        venues.hasMany(models.events, { foreignKey: 'venue_id' });
      },

      findLargeVenues: function(models) {
				return venues.findAll({
					where: { capacity: { gt: 500 }},
				});
			}

    }
  });
  return venues;
};
