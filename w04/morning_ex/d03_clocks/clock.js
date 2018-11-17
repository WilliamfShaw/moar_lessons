$(function(){
  clock();
});

function clock() {

	// Step 1
	var secHand = $('#second-hand');
	var minHand = $('#minute-hand');
	var hourHand = $('#hour-hand');
	// var secDeg = 0;
	// var minDeg = 0;
	// var hourDeg = 0;
	// Step 5 - Instead of starting each deg at 0,
	// We can start each hand based on the current time.
	var currentTime = new Date();
	var secDeg = currentTime.getSeconds() * 6;
	var minDeg = currentTime.getMinutes() * 6 + currentTime.getSeconds() * 0.1;
	var hourDeg = currentTime.getHours() * 30 + currentTime.getMinutes() * 0.5;
	// Step 2
	// Rotate the secondHand 6 degree every 1000 ms (1 second).
	setInterval(function() {
		// Step 2
		// Rotate the secondHand 6 degree every 1000 ms (1 second).
		secDeg += 6;
		// Step 3
		// Rotate the minuteHand - the minuteHand rotates 6 degrees every minute
		// there are 60 seconds in each minute.  
		minDeg += (6/60); 
		// Step 4
		// rotate the hourHand - the hourHand rotates 30 degrees every hour.  There are
		// 3600 hundred seconds in each hour.  
		hourDeg += (30/3600);
		secHand.css('transform', 'rotate(' + secDeg + 'deg)');
		minHand.css('transform', 'rotate(' + minDeg + 'deg)');
		hourHand.css('transform', 'rotate(' + hourDeg + 'deg)');
	}, 1000);
}
