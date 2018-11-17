$(function() {
	console.log('Loaded, bro');

	var leftDiv = $('.left');
	var rightDiv = $('.right');
	var body = $(document.body);

	// 1

	var firstEl = leftDiv.find('li').eq(0);
	rightDiv.find('ul').prepend(firstEl);

	// 2

	var childrenOfLeft = leftDiv.children();
	childrenOfLeft.css('font-family', 'Helvetica');

	// 3

	rightDiv.find('li').addClass('excited');

	// 4
	var src = leftDiv.find('img').attr('src');
	body.css('background', 'url(' + src + ')');
	leftDiv.find('img').remove();
	// 5
	body.css('color', 'lavenderblush');

	// 6

	$('ul').removeClass('list')
				 .css('border', '2px solid papayawhip');

	// 7

	var newDiv = $('<div>');
	newDiv.attr('id', 'swag')
				.addClass('circle')
				.appendTo(body); // body.append(newDiv);

	// 8

	$('.left, .right').each(function(a, b, c) {
		var newP = $('<h1>');
		var height = $(this).height();
		var width = $(this).width();
		newP.text('h: ' + height + ' w: ' + width);
		$(this).prepend(newP);
	});

});