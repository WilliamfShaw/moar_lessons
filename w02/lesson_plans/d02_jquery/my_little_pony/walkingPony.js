$(function() {
  console.log('Loaded, bro');
  walkingPony();

  $('body').on('click', '.pony', function() {
    console.log('hi')
    var pony = $(this).clone();
    var distance = 1625;

    pony.appendTo($(document.body));

    setInterval(function() {
      pony.css('left', distance + 'px');
      if (distance < -600){
        distance = 1625;
      } else {
        distance -= 5;
      }
    }, 60);
  });
});

var walkingPony = function() {
  var pony = $('.pony');
  var distance = 1625;
  setInterval(function() {
    pony.css('left', distance + 'px');
    if (distance < -600){
      distance = 1625;
    } else {
      distance -= 5;
    }
  }, 60);
};
