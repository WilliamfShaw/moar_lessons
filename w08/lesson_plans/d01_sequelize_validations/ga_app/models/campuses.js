"use strict";
module.exports = function(sequelize, DataTypes) {
  var campuses = sequelize.define("campuses", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Must be a valid integer' },
        max: { args: [1000], msg: 'Campus max is 1000' },
        min: { args: [40], msg: 'Campus min is 40' }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input an address' }
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Berlin', 'Chicago', 'New York City', 'Boston', 'Los Angeles', 'San Francisco', 'Austin', 'Seattle', 'Atlanta', 'Sydney', 'Melbourne', 'Hong Kong', 'London']],
          msg: "Must be one of the following: 'Berlin'|'Chicago'|'New York City'|'Boston'|'Los Angeles'|'San Francisco'|'Austin'|'Seattle'|'Atlanta'|'Sydney'|'Melbourne'|'Hong Kong'|'London'"
        }
      }
    },
    president: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input a name' }
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {

    underscored: true,
    classMethods: {
      associate: function(models) {
        campuses.hasMany(models.courses, { foreignKey: 'campus_id' });
      }
    }
  });
  return campuses;
};