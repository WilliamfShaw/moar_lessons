"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'That Username has been taken already.' },
      validate: {
        isAlpha: { msg: 'Letters only please.' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'An account already exists for that email address.' },
      validate: {
        isEmail: { msg: 'Not a valid email address' }
      }
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: { msg: 'Not a valid URL' }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Must enter a number' },
        max: { args: [120], msg: 'Age must be less than or equal to 120' },
        min: { args: [16], msg: 'Age must be greater than or equal to 16' }
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: { msg: 'Not a valid date' },
        isAfter: { args: ['1/1/1895'], msg: 'Birthdate must be after 1/1/1895' }
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['NY', 'CA', 'GA', 'IL', 'WA', 'MA', 'TX']],
          msg: "Must be one of the following: 'NY', 'CA', 'GA', 'IL', 'WA', 'MA', 'TX'"
        }
      }
    },
    hometown: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { msg: 'Letters only please' }
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    favorite_food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'You must input a favorite food' }
      }
    }
  }, {

    underscored: true,

    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return users;
};