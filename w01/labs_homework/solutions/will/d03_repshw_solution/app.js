//Round 0
var lengths = function(arrayOfWords) {
  var lengths = [];
  for (var i = 0; i < arrayOfWords.length; i++) {
    lengths.push(arrayOfWords[i].length);
  };
  return lengths;
};

//Round 1
var fizzbuzzer = function(num) {
  for (var i = 0; i < num; i++) {
    if (i % 15 === 0) {
      console.log("Fizzbuzzer");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log("Skywalker");
    }
  }
};

//Round 2
var transmogrifier = function(num1, num2, num3) {
  var product = num1 * num2;
  var transmogrified = Math.pow(product, num3);
  return "( " + num1 + " times " + num2 + " ) to the power of " + num3 + " is equal to " + transmogrified;
};

//Round 3
var toonify = function(accent, sentence) {
  var tooned = [],
  var letters = sentence.split("");
  var toonified;
  if (accent === "daffy") {
    for (var i = 0; i < letters.length; i++) {
      toonified = letters[i].replace("s", "th");
      tooned.push(toonified);
    }
  } else if (accent === "elmer") {
    for (var i = 0; i < letters.length; i++) {
      toonified = letters[i].replace("r", "w");
      tooned.push(toonified);
    }
  } else {
    return sentence;
  }
  return tooned.join("");
};

//Round 4
var digitSum = function(num) {
  var sum = 0;
  var strNum = num.toString();
  var strNumArr = strNum.split('');
  for (var i = 0; i < strNumArr.length; i++) {
    var strNumArrNumber = parseInt(strNumArr[i]);
    sum += strNumArrNumber;
  }
  return sum;
};

//Round 5
var wordReverse = function(stringOfWords) {
  var arrayOfWords = stringOfWords.split(' ');
  var reversedArrayOfWords = arrayOfWords.reverse();
  var reverseStringOfWords = reversedArrayOfWords.join(' ');
  // var reverseStringOfWords = arrayOfWords.reverse().join(' ');
  return reverseStringOfWords;
};

//Round 6
var letterReverse = function(stringOfWords) {
  var stringOfWordsArr = stringOfWords.split(' ');
  for (var i = 0; i < stringOfWordsArr.length; i++) {
    var word = stringOfWordsArr[i];
    var wordArr = word.split('');
    var revWordArr = wordArr.reverse();
    var revWord = revWordArr.join('');
    stringOfWordsArr[i] = revWord;
  }
  var newString = stringOfWordsArr.join(' ');
  return newString;
};

//Round 6 from in class lesson
var letterReverseMorningEx = function(stringOfWords) {
    var arrStringOfWords = stringOfWords.split(' ');
    var arrReverseString = [];
    for(var i = 0; i < arrStringOfWords.length; i++) {
        var word = arrStringOfWords[i];
        var arrWord = word.split(''); 
        var arrRevWord = arrWord.reverse();
        var revWord = arrRevWord.join('');
        arrReverseString.push(revWord);
    }
    var reverseString = arrReverseString.join(' ');
    return reverseString;
}

//Round 7
var longest = function(arrayOfStrings) {
  var longestWord = '';
  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestWord.length) {
      longestWord = arrayOfStrings[i];
    }
  }
  return longestWord;
};

//Final Round
var repMaster = function(input, callback) {
  var functionResult = callback(input);
  return functionResult + " proves that I am the rep MASTER!";
};

