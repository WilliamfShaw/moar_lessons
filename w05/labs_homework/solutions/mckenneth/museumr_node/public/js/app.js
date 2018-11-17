
$(function () {
  console.log("loaded bro");
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
  $(".form-div").on('click', '.new-artist-submit', createArtist)
  $(".form-div").on('click', '.edit-artist-submit', saveUpdate)
  $(".horizontal").on('click', '.edit-artist', editArtist)
  $(".horizontal").on('click', '.delete-artist', deleteArtist)
})

var getArtists = function () {
  $.ajax({
    url: "/artists",
    method: "GET",
    dataType: "json"
  }).done(renderArtists)
};

var renderArtists = function (data) {
  var resultDiv = $(".horizontal");
  resultDiv.empty();
  $(".new-artist").show()
  $(".new-painting").hide()
  $(".form-div").css('z-index', 0)
  var template = Handlebars.compile($("#artist-template").html())

  for ( var i = 0;i < data.length;i++ ) {
    var artist = data[i];
    resultDiv.append(template(artist));
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
  var artist = data;
  var paintings = artist.paintings;

  var resultDiv = $(".horizontal");
  resultDiv.empty();

  $(".new-artist").show()
  $(".new-painting").hide()

  var artistTemplate = Handlebars.compile($("#artist-template").html())
  var paintingTemplate = Handlebars.compile($("#painting-template").html())

  resultDiv.append(artistTemplate(artist));

  for ( var i = 0;i < paintings.length;i++ ) {
    var painting = paintings[i];
    resultDiv.append(paintingTemplate(painting));
  }
};


var getPaintings = function () {
  $.ajax({
    url: "/paintings",
    method: "GET",
    dataType: "json"
  }).done(renderAllPaintings);
};

var renderAllPaintings = function (data) {
  console.log(data)
  var resultDiv = $(".horizontal");
  $(".new-artist").hide()
  $(".new-painting").show()
  resultDiv.empty();
  var renderedPaintings = data.map(function(painting) {
    return renderOnePainting(painting);
  });

  resultDiv.append(renderedPaintings);
};

var renderOnePainting = function(data){
  var template = Handlebars.compile($("#painting-template").html());
  return template(data);
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
  var id = $(this).closest(".artist-form").attr('data-id')
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
  var id = $(this).closest(".artist").attr('data-id');
  $.ajax({
    url: "/artists/" + id,
    method: "DELETE",
  }).done(getArtists)
}
