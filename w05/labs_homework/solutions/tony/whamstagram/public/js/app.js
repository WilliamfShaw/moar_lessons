console.log("loaded bro");
$(function() {
	getWhams();
	$('h1').on('click', getWhams);
	$('#whams-container').on('click', '.show', getWham);
	$('#whams-container').on('click', '.edit', editWhamForm);
	$('#whams-container').on('click', '.delete', deleteWham);
	$('.new').on('click', createWham);
	$('#whams-container').on('click', '.save', saveWham);
	$('#whams-container').on('click', '.update', updateWham);
});

var getWhams = function() {
	$.ajax({
		method: 'GET',
		url: '/photos',
		dataType: 'json'
	})
	.done(renderAll)
};

var renderAll = function(data) {
	var resultsDiv = $("#whams-container")
  resultsDiv.empty();
  var whamTemplate = Handlebars.compile($("#wham-template").html());
  for (var i = 0; i < data.length; i++) {
    var wham = {
    	id: data[i].id,
      poster: data[i].poster,
      img_url: data[i].img_url
    }
    resultsDiv.append(whamTemplate(wham))
  }
};

var getWham = function() {
	var id = $(this).closest(".wham").attr("data-id");
	$.ajax({
		method: 'GET',
		url: '/photos/' + id,
		dataType: 'json'
	})
	.done(renderOne)
};

var renderOne = function(data) {
	var resultsDiv = $("#whams-container")
  resultsDiv.empty();
  var fullWhamTemplate = Handlebars.compile($("#full-wham-template").html());
  var wham = {
  	id: data.id,
    poster: data.poster,
    img_url: data.img_url,
    caption: data.caption
  }
  resultsDiv.append(fullWhamTemplate(wham))
};

var deleteWham = function() {
	var id = $(this).closest(".wham").attr("data-id");
	$.ajax({
		method: 'DELETE',
		url: '/photos/' + id,
	})
	.done(getWhams)
};

var editWhamForm = function() {
	var id = $(this).closest(".wham").attr("data-id");
	var poster = $(this).closest(".wham").attr("data-poster");
	var caption = $(this).closest(".wham").attr("data-caption");
	var img_url = $(this).closest(".wham").attr("data-img-url");
	var wham = {
		id: id,
		poster: poster,
		caption: caption,
		img_url: img_url
	};
	var editWhamTemplate = Handlebars.compile($("#edit-wham-template").html());
	var resultsDiv = $("#whams-container");
	resultsDiv.empty();
	resultsDiv.append(editWhamTemplate(wham));
}

var updateWham = function() {
	var id = $('.update-form').attr('data-id')
	var poster = $('input').eq(0).val()
	var img_url = $('input').eq(1).val()
	var caption = $('textarea').val()
	var formParams = {
		poster: poster,
		caption: caption,
		img_url: img_url
	};
	$.ajax({
		method: 'PUT',
		url: '/photos/' + id,
		data: formParams
	})
	.done(renderOne);
}

var createWham = function() {
	var newWhamTemplate = Handlebars.compile($("#new-wham-template").html());
	var resultsDiv = $("#whams-container");
	resultsDiv.empty();
	resultsDiv.append(newWhamTemplate());
}

var saveWham = function() {
	var bodyParams = {
		poster: $('input').eq(0).val(),
		img_url: $('input').eq(1).val(),
		caption: $('input').eq(2).val()
	};
	$.ajax({
		method: 'POST',
		url: '/photos',
		data: bodyParams
	})
	.done(renderOne)
}

