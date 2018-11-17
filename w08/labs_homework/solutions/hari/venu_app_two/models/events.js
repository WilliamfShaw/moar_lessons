"use strict";
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define("events", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Name cannot be blank' }
      }
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        isDate: { msg: 'Date must be a valid date' },
        isAfter: {
          args: ['1/1/1970'],
          msg: 'Date must be after beginning of epoch time'
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: { msg: 'Duration must be a number' },
        min: { args: [1], msg: 'Duration must be greater than 0' },
        max: { args: [5], msg: 'Duration must be less than 6' }
      }
    },
    venue_id: {
      type: DataTypes.INTEGER,
    }
  }, {

    underscored: true,

		instanceMethods: {
			category: function() {
				var length;
				(this.duration > 2) ? length = 'long' : length = 'short'
				return length;
			},
			isUpcoming: function() {
				return this.date > Date.now();
			}
		},

    classMethods: {

      findUpcomingEvents: function() {
        // http://stackoverflow.com/questions/28881614/sequelize-time-comparison-failed-after-database-replacement-to-postgresql  
        return events.findAll({
          where: {
            date: {
              gt: new Date()
            }
          }
        })
      },

      associate: function(models) {
        events.belongsTo(models.venues, { foreignKey: 'venue_id' });
        events.belongsToMany(models.artists, {
          through: 'artists_events',
          foreignKey: 'event_id'
        });
      }
    }
  });
  return events;
};
