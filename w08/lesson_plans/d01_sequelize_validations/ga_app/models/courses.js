"use strict";
module.exports = function(sequelize, DataTypes) {
  var courses = sequelize.define("courses", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input a course name' }
      }
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: { args: [12], msg: 'The maximum is 12 weeks' },
        min: { args: [1], msg: 'The minimum is 1 week' },
        isInt: { msg: 'Must be an integer' }
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['Workshop', 'Part-Time', 'Immersive']],
          msg: "Must be one of the following: 'Workshop'|'Part-Time'|'Immersive'"
        }
      }
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'Please enter a valid date' },
        isAfter: '1/1/2012'
      }
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'Please enter a valid date' },
        isAfter: '1/1/2012'
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: { args: [0], msg: 'Minimum is 0' },
        max: { args: [70], msg: 'Maximum is 70' }
      }
    }
  }, {

    underscored: true,
    classMethods: {
      associate: function(models) {
        courses.belongsTo(models.campuses, {foreignKey: 'campus_id'});
        courses.belongsToMany(models.students, { foreignKey: 'course_id', through: 'courses_students' });
      },

      big: function() {
        return courses.findAll({
          where: { capacity: { gt: 29 } }
        });
      }
    }
  });
  return courses;
};