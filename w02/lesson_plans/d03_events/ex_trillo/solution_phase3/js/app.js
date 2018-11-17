$(function() {
  console.log("Hi");
  $('.card .delete').on('click', deleteCard);
  $('.card .finish').on('click', finishCard);
  $('#new-card-button').on('click', addCard);
});

var addCard = function() {
  var cardText = $('#new-card-text').val();
  var deleteButton = $('<span>').addClass('delete').text('X');
  var finishButton = $('<span>').addClass('finish').text('Finish');

  deleteButton.on('click', deleteCard);
  finishButton.on('click', finishCard);

  var newCard = $('<li>')
    .text(cardText)
    .append(deleteButton)
    .append(finishButton)
    .addClass('card')
    .addClass('todo');

  var todoList = $('#todo-column ul');
  newCard.prependTo(todoList);
  $('#new-card-text').val('');
}

var finishCard = function() {
  $('#done-column ul').prepend($(this).parent());
  $(this).remove();
}

var deleteCard = function() {
  $(this).parent().remove();
}
