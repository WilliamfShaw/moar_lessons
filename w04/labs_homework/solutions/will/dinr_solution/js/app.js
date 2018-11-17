$(function () {
	console.log("loaded bro")
	$('#search-button').on('click', getDba)
	$('#search-results').on('click', '#result', getRestaurant)
	$('#show-modal').on('click', function () {
		$(this).hide();
	})
	$('#italian').on('click', getButton)
	$('#chinese').on('click', getButton)
});


var getDba = function () {
	console.log("function Started");
	var baseUrl = "http://dinr-api.mckenneth.com/api/"
	var dba = encodeURI( $('#business').val() );
	var boro = encodeURI( $('#boro').val() );
	$.ajax({
		url: baseUrl + "restaurants?" + "boro=" + boro + "&dba=" + dba,
		method: 'GET', 
		dataType: 'json'
	}).done(showDba)
};

var showDba = function (data) {
	var resultsDiv = $('#search-results');
	resultsDiv.empty();;
	var template = Handlebars.compile( $('#results-template').html() )
	var group = data.response.data;
	for ( var i = 0; i < group.length; i++ ) {
		var business = group[i];
		var name = business.dba;
		var address = [ business.building_number + " " + business.street_address, business.boro_name, business.zip_code.toString()].join(", ")
		var phoneNumber = business.phone_number;
		var id = business.camis;
		var businessData = {
			id: id,
			name: name, 
			address: address, 
			phoneNumber: phoneNumber
		}
		resultsDiv.append(template(businessData))	
	}
	$('#business').val('');
	$('#boro').val('')
};

var getRestaurant = function () {
	var baseUrl = "http://dinr-api.mckenneth.com/api/"
	var business = $(this).closest('#result');
	var camisId = parseInt( business.attr('data-id') )
	$.ajax({
		url: baseUrl + "camis/" + camisId,
		method: 'GET', 
		dataType: 'json'
	}).done(showRestaurant);
};

var showRestaurant = function (data) {
	var showDiv = $('#show-modal');
	showDiv.empty();
	var template = Handlebars.compile($('#show-template').html())
	var business = data.response.data.restaurant;
	var name = business.dba;
	var inspections = business.inspections;
	var grade = business.current_grade;
	var businessData ={
		name: name,
		grade: grade,
		inspections: []
	}
	for ( var i = 0;i < inspections.length;i++ ){
		var newInspection = {};
		var currentInspection = inspections[i];
		var date = currentInspection.date_inspected;
		var violations = currentInspection.violations;
		newInspection.date = date;
		newInspection.violations = violations.map(function (element, index, array) {
			var description = {
				description: element.description
			}
			return description;
		})
	businessData.inspections.push(newInspection);
	}
	showDiv.append(template(businessData));
	showDiv.show();
};

var getButton = function () {
	var baseUrl = "http://dinr-api.mckenneth.com/api/"
	var button = $(this).closest('button');
	var searchParam = button.attr('id')
	var boro = encodeURI( $('#boro').val() );
	$.ajax({
		url: baseUrl + "restaurants?" + "boro=" + boro + "&cuisine=" + searchParam,
		method: 'GET',
		dataType: 'json'
	}).done(showDba)
}