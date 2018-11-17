$(function() {
	console.log('Loaded, bro');
	$('button').on('click', function() {
		console.log('Starting a game!');
		memoryGame.start();
	});
});

// USE THIS TO SHUFFLE YOUR NUMBERS
//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};

var memoryGame = {
	// set game tiles
	tiles: ['A','A','B','B','C','C','D','D','E','E'],
	start: function() {
		// shuffle the game tiles
		this.tiles = shuffle(this.tiles);
		// create and display DOM tiles
		this.makeAndDisplayTiles();
	},
	makeAndDisplayTiles: function() {
		var game = this;
		var tileContainer = $('#game').empty();
		var footer = $('#footer').text('');

		for (var i = 0; i < 10; i++) {
			$('<div>').addClass('column')
								.attr('data-value', this.tiles[i])
								.appendTo(tileContainer);
		}
		this.addEventsToTiles();
	},
	addEventsToTiles: function() {
		console.log(this, 'in add events to tile');
		var game = this;
		var gameTiles = $('.column');

		gameTiles.on('click', function() {
			console.log(this, 'in the click event')
			var tile = this;
			game.makePlay(tile);
		});
	},
	// BREAK
	// 10 minutes?
	makePlay: function(tile) {
		console.log('Making a play', this, tile);

		var currentTile = $(tile);
		var tileValue = currentTile.attr('data-value')

		currentTile.text(tileValue)
							 .addClass('found')
							 .addClass('clicked');

		if ($('.clicked').length === 2) {
			this.checkForMatch();
		}
	},
	checkForMatch: function() {
		var clicked1 = $('.clicked').eq(0).attr('data-value');
		var clicked2 = $('.clicked').eq(1).attr('data-value');

		if (clicked1 === clicked2) {
			$('.clicked').removeClass('clicked')
			             .off('click');
			this.checkForWin();
		} else {
			setTimeout(function(){
				$('.clicked').removeClass('clicked found')
										 .text('');
			}, 200);
		}
	},
	checkForWin: function() {
		var foundTiles = $('.found');

		if (foundTiles.length === 10) {
			foundTiles.addClass('won')
			          .removeClass('found');
			$('#footer').text('WINNER WINNER...click start to play again');
		}
	}
};