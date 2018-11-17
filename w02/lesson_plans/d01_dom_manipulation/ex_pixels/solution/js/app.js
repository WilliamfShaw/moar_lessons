window.onload = function() {
  console.log("Loaded, bro.");

  var container = document.getElementById('container');

  for (var row = 0; row < 15; row++) {
    for (var col = 0; col < 15; col++) {
      var pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.id = pixelId(row, col);
      container.appendChild(pixel);
    }
  }
};

var pixelId = function(row, col) {
  return row + '-' + col;
};

var getPixel = function(row, col) {
  return document.getElementById(pixelId(row, col));
};

var colorPixel = function(row, col, color) {
  getPixel(row, col).style.backgroundColor = color;
};

var light = function() {
  for (var row = 0; row < 15; row++) {
    for (var col = 0; col < 15; col++) {
      var distance = Math.round((row * row + col * col) / 4);
      var color = [
        'hsl(224, 64%, ',
        100 - distance,
        '%)'
      ].join('');

      colorPixel(row, col, color);
    }
  }
};

var stripes = function() {
  var colors = ['indianred', 'cornflowerblue', 'seagreen'];
  for (var row = 0; row < 15; row++) {
    for (var col = 0; col < 15; col++) {
      colorPixel(row, col, colors[col % 3]);
    }
  }
}

var picnicTable = function() {
  for (var row = 0; row < 15; row++) {
    for (var col = 0; col < 15; col++) {
      if ((row + col) % 2 === 0) {
        colorPixel(row, col, 'white');
      } else {
        colorPixel(row, col, 'red');
      }
    }
  }
}


