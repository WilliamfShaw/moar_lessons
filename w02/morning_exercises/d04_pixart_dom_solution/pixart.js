$(function() {
	console.log('$$$ in the bank.');

  var inputField = $('#color-field');
  var button = $('#set-color');
  var brush = $('.brush');
  var color = 'black';

  var setColor = function() {
    color = inputField.val();
    brush.css('background', color);
  }

  button.on('click', function() {
  	setColor();
  });

  inputField.on('keypress', function(e) {
    // e is commonly used for a key.  
    // e.which and e.keycode both are used to capture the ASCII
    // keycode of an individual key.  
  	var key = e.which || e.keycode
  	if (key === 13) {
  		setColor();
  	}
  });

  for (var i = 0; i < 8000; i++) {
  	var box = $('<div>');
  	box.addClass("square");
  	box.on("mouseover", function() {
  		$(this).css('background', color);
  	});
    // box.on('click', function() {
    //   $(this).css('background', green);
    // });
  	$('body').append(box);
  };
});
