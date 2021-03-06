"use strict";
module.exports = function(sequelize, DataTypes) {
  var students = sequelize.define("students", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input a name' }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input a name' }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Please input an age' },
        max: { args: [120], msg: 'Max age is 120'},
        min: { args: [18], msg: 'Minimum age is 18'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'An account already exists for that email address'},
      validate: {
        isEmail: { msg: 'Please input a valid email address'}
      }
    }
  }, {

    underscored: true,
    classMethods: {
      associate: function(models) {
        students.belongsToMany(models.courses, { foreignKey: 'student_id', through: 'courses_students'})
      }
    }
  });
  return students;
};