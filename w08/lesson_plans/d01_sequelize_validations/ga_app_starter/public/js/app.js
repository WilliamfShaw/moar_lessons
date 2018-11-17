var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	$('#student').on('click', renderStudentForm);
	$('#course').on('click', renderNewCourseForm);
	$('#campus').on('click', renderCampusForm);
	$('#container').on('click', 'button', newEntry);
});

var renderNewCourseForm = function() {
	$.get('/campuses')
	.done(function(campuses) {
		var courseTemplate = Handlebars.compile($('#new-course-template').html());
		$('#container').html(courseTemplate(campuses));
	});
};

var renderStudentForm = function() {
	var studentTemplate = Handlebars.compile($('#new-student-template').html());
	$('#container').html(studentTemplate());
};

var renderCampusForm = function() {
	var campusTemplate = Handlebars.compile($('#new-campus-template').html());
	$('#container').html(campusTemplate());
};

var newEntry = function() {
	var resource = this.id;

	$.post('/'+resource, $('input, select').serialize())
	.fail(function(err) {})
	.done(function(newEntry) {});
};