$(function(){
  console.log("tick-tock");

  var startButton = $('#start');
  var stopButton = $('#stop');
  var resetButton = $('#reset');
  var interval;
  var time = 0;

  startButton.on('click', function() {
  	console.log(interval);
  	if (!interval) {
  		interval = setInterval(function() {
  			time++;
  			renderTime(time);
  		}, 1000)
  	}
  });

  stopButton.on('click', function() {
  	console.log(interval);
  	clearInterval(interval);
  	interval = undefined;
  });
  
  resetButton.on('click', function() {
  	time = 0;
  	renderTime(time);
  })


});

var renderTime = function(time) {
  var stopwatch = $('#stopwatch');
  stopwatch.text(time);
};



