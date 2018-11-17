var nameScoreSum = function (names) {
  names.sort();
  var totalSum = 0;
  for ( var i = 0; i < names.length; i++ ) {
    var currentName = names[i].split('');
    var nameSum = 0;
    for ( var j = 0; j < currentName.length; j++ ){
       nameSum += currentName[j].charCodeAt(0) - 64
    }
    totalSum += ( nameSum * (i + 1))
  }
  return totalSum;
}