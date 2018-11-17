"use strict";

module.exports = function(sequelize, DataTypes) {

	var courses = sequelize.define('courses', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: 'Please input a name'}
			}
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				max: { args: [12], msg: 'The max is 12 weeks'},
				min: { args: [1], msg: 'The min is 1 week(s)'},
				isInt: { msg: 'Please input a number'}
			}
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isIn: {
					args: [['Workshop', 'Part-Time', 'Immersive']],
					msg: 'Must be within : Workshop, Part-Time, Immersive'
				}
			}
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: { msg: 'Please enter a valid date'},
				isAfter: {args: ['1/1/2012'], msg: 'Sorry the date must be after we were founded'}
			}
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false,
			validate: {
				isDate: { msg: 'Please enter a valid date'},
				isAfter: {args: ['1/1/2012'], msg: 'Sorry the date must be after we were founded'}
			}
		},
		capacity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isInt: { msg: 'Please input a valid number'},
				max: { args: [70], msg: 'Max is 70'},
				min: { args: [0], msg: 'Min is 0'}
			}
		},
		campus_id: {
			type: DataTypes.INTEGER
		}
		},
		{

			underscored: true,
			classMethods: {
				associate: function(models) {
					courses.belongsTo(models.campuses, { foreignKey: 'campus_id'});
					courses.belongsToMany(models.students, { foreignKey: 'course_id', through: 'courses_students'});
				}
			}
	});
	return courses;
};
