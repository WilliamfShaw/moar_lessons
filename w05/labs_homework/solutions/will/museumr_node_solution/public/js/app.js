console.log("loaded bro");

$(function () {
  $(".new-artist").hide()
  $(".new-painting").hide()
  $(".artist-link").on('click', getArtists)
  $(".horizontal").on('click', '.show-more', function () {
    $(this).hide()
    $(this).closest('.artist').find('.artist-info').slideDown(500);
  })
  $(".horizontal").on('click', ".artist-info", function () {
    $(this).closest('.artist').find(".artist-info").hide();  
    $(this).closest('.artist').find(".show-more").show()
  })
  $(".paintings-link").on('click', getPaintings)
  $(".horizontal").on('click', '.artist-image', getOneArtist)
  $(".new-artist").on('click', renderNewArtistForm)
  $(".new-painting").on('click', newPaintingForm)
  $(".form-div").on('click', '.new-artist-submit', createArtist)
  $(".form-div").on('click', '.edit-artist-submit', saveUpdate)
  $(".form-div").on('click', '.add-painting-button', createNewPainting)
  $(".horizontal").on('click', '.edit-artist', editArtist)
  $(".horizontal").on('click', '.delete-artist', deleteArtist)
  $(".horizontal").on('click', ".delete", deletePainting)
})

var getArtists = function () {
  $.ajax({
    url: "/artists",
    method: "GET",
    dataType: "json"
  }).done(renderArtists)
}

var renderArtists = function (data) {
  var resultDiv = $(".horizontal");
  resultDiv.empty();
  $(".new-artist").show()
  $(".new-painting").hide()
  $(".form-div").css('z-index', 0)
  $(".form-div").empty()
  var template = Handlebars.compile($("#artist-template").html())
  for ( var i = 0;i < data.length;i++ ) {
    resultDiv.append(template(data[i]))
  }
}

var getOneArtist = function () {
  console.log("got here");
  var id = $(this).closest(".artist").attr('data-id')
  $.ajax({
    url: "/artists/" + id,
    method: "GET",
    dataType: "json"
  }).done(renderOneArtist)
}

var renderOneArtist = function (data) {
  console.log("got to the render");
  var resultDiv = $(".horizontal");
  resultDiv.empty();
  $(".new-artist").show()
  $(".new-painting").show()
  var artistTemplate = Handlebars.compile($("#artist-template").html())
  var paintingTemplate = Handlebars.compile($("#painting-template").html())
  resultDiv.append(artistTemplate(data));
  var paintings = data.paintings;
  for (var i = 0;i < paintings.length;i++ ) {
    renderOnePainting(paintings[i])   
  }
};

var getPaintings = function () {
  $.ajax({
    url: "/paintings",
    method: "GET",
    dataType: "json"
  }).done(renderPaintings);
};

var renderPaintings = function (data) {
 var resultDiv = $(".horizontal");
 $(".new-artist").hide()
 $(".new-painting").hide();
 $(".form-div").css('z-index', 0)
 $(".form-div").empty()
 resultDiv.empty();
 var template = Handlebars.compile($("#painting-template").html());
 for ( var i = 0;i < data.length;i++ ) {
  renderOnePainting(data[i]);
 }
}

var renderOnePainting = function (data) {
  var resultDiv = $(".horizontal");
  var template = Handlebars.compile($("#painting-template").html());
  resultDiv.append(template(data));
}

var renderNewArtistForm = function () {
  console.log("got here");
  var resultDiv = $(".form-div");
  resultDiv.css('z-index', 3)
  $(".horizontal").empty();
  resultDiv.empty();
  resultDiv.show();
  var template = Handlebars.compile($("#artist-form-template").html());
  resultDiv.append(template())
}

var createArtist = function () {
  var resultDiv = $(".form-div");
  var name = $("#artist-name").val()
  var img_url = $("#artist-image").val()
  var birthYear = $("#artist-birth-year").val();
  var nationality = $("#artist-nationality").val();
  var description =$("#artist-description").val()
  var artistData = {
     name: name, 
     img_url: img_url, 
     birthYear: birthYear,
     nationality: nationality,
     description: description
   }
   $.ajax({
    url: "/artists",
    method: "post",
    data: artistData
   }).done(getArtists)
   resultDiv.empty();
}

var editArtist = function () {
  var id = $(this).closest(".artist").attr('data-id');
  $.ajax({
    url: "/artists/" + id,
    method: "GET",
    dataType: "json"
  }).done(updateForm)
}

var updateForm = function (data) {
 var resultDiv = $(".form-div");
  resultDiv.css('z-index', 3)
  $(".horizontal").empty();
  resultDiv.empty();
  resultDiv.show();
  var template = Handlebars.compile($("#artist-edit-template").html());
  resultDiv.append(template(data))
}

var saveUpdate = function () {
  var id = $("#artist-id").val() 
  var name = $("#artist-name").val()
  var img_url = $("#artist-image").val()
  var birthYear = $("#artist-birth-year").val();
  var nationality = $("#artist-nationality").val();
  var description =$("#artist-description").val()
  var artistData = {
     name: name, 
     img_url: img_url, 
     birthYear: birthYear,
     nationality: nationality,
     description: description
   }
   $.ajax({
    url: "/artists/" + id,
    method: "put",
    data: artistData
   }).done(getArtists)
   $(".form-div").empty();
}

var deleteArtist = function () {
  var artistDiv = $(this).closest(".artist")
  var id = artistDiv.attr('data-id');
  $.ajax({
    url: "/artists/" + id,
    method: "DELETE",
  }).done(getArtists)
  artistDiv.remove()
}

var newPaintingForm = function () {
  var resultDiv = $(".form-div");
  resultDiv.css('z-index', 3)
  resultDiv.show();
  var id = $(".artist").attr('data-id');
  var template = Handlebars.compile($("#painting-form-template").html())
  var artistData = {
    id: id
  }
  resultDiv.append(template(artistData))
  $(".horizontal").empty();
}

var createNewPainting = function () {
  console.log("clicked");
  var id = $("#artist-id").val();
  var paintingData = {
    title: $("#painting-title").val(),
    img_url: $("#painting-image").val()
  }
  $.ajax({
    url: "/artists/" + id + "/paintings",
    method: "POST",
    data: paintingData
  }).done(getPaintings)
}

var deletePainting = function () {
  var paintingDiv = $(this).closest(".image-frame")
  var id = $(this).attr('data-id');
  $.ajax({
    url: "/paintings/" + id,
    method: "DELETE",
  }).done(getArtists)
  paintingDiv.remove()
}


























