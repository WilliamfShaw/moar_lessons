"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
  	migration.createTable('courses_students', {
  		course_id: {
  			type: DataTypes.INTEGER
  		},
  		student_id: {
  			type: DataTypes.INTEGER
  		},
  		created_at: {
  			type: DataTypes.DATE,
  			allowNull: false
  		},
  		updated_at: {
  			type: DataTypes.DATE,
  			allowNull: false
  		}
  	}).done(done);
  },

  down: function(migration, DataTypes, done) {
  	migration.dropTable('courses_students').done(done);
  }
};
