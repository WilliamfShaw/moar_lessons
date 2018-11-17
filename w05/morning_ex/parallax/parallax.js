$(function(){
	console.log("Loaded, bro");
// solution
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		console.log(scrolled)

		$('.bg').css('bottom', (scrolled * 0.25) + 'px');
		// $('.top-left').css('left', (scrolled * .8) + 'px');
		// this was the skew I added live.  
		$('.top-left').css('transform', 'skewY(' + scrolled + 'deg)');
    $('.top-center').css('top',(scrolled * .8) + 'px').css('z-index',scrolled * 0.5);
		$('.top-center').css('transform','rotate('+ (scrolled * .1) + 'deg)');
		$('.top-right').css('transform','rotateY(' + (scrolled * 1.5) + 'deg)');

		$('.top-right').css('top', (scrolled * 0.6) + 'px');
    $('.bottom-left').css('left', (scrolled * 0.8) + 'px').css('z-index',scrolled);
    $('.bottom-center').css('top', (scrolled * 0.7) + 'px');
    $('.bottom-center').css('transform','rotate('+ (scrolled * .4) + 'deg)');
    $('.bottom-left').css('transform','rotateX'+ (scrolled * .6) + 'deg)');
    $('.bottom-right').css('right', (scrolled * 0.6) + 'px');


    $('.break').css('transform','rotate('+ (scrolled * .5) + 'deg)');
	})

})