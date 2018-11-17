$(function() {
  console.log('Loaded, bro.');

  template = Handlebars.compile($('#card-template').html());
  var newCardHtml = template({
    content: 'Wash the dog'
  });
  $('body').append(newCardHtml);


});
