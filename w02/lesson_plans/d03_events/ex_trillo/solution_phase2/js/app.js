$(function() {
  console.log("Hi");

  $('.done').on('click', function() {
    $(this).remove();
  });

  $('.todo').on('click', function() {
    $('#done-column ul').prepend($(this));
  });

  $('#new-card-button').on('click', addCard);
});

var addCard = function() {
  console.log("Yo");
  var cardText = $('#new-card-text').val();
  var todoList = $('#todo-column ul');
  var newCard = $('<li>').text(cardText).addClass('card').addClass('todo');

  newCard.prependTo(todoList);
}
