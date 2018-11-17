// Tony's Original

var isPalindrome = function(string) {
	var normalizedString = string.replace(/ /g,'')
		.toLowerCase();
	var halfway = (normalizedString.length) / 2;
	for (var i = 0; i < halfway; i++) {
		if (normalizedString[i] !== normalizedString[halfway * 2 - 1 - i]) {
			return false;
		}
	}
	return true;
};


// Peter's one liner

var isPalindromeOneLiner = function(string) {
  var lowered = string.toLowerCase();

  return lowered.replace(/\s+/g, '').replace(/,/g, '') 
      === lowered.split('').reverse().join('').replace(/\s+/g, '').replace(/,/g, '');
}; 

// Refactored Eric Doyle's

var palindrome = function(inputString) {
  var normal = inputString
  	.toLowerCase()
  	.replace(/\s/g, '');
  console.log(normal);

  var reverse = normal.split("")
  	.reverse()
  	.join("");
  console.log(reverse);
  return (normal === reverse);
  // if (normal === reverse){
  //     return "true"
  // } else {
  //     return "false"
  // }
};



// Tony's second solution

var isPalindromeTwo = function(string) {
	var normalized = string.replace(/ /g,'')
		.toLowerCase();
	var halfLength = (normalized.length / 2);
	var frontHalf = normalized.slice(0, Math.ceil(halfLength));
	var backHalf = normalized.slice(Math.floor(halfLength), normalized.length);
	return (frontHalf === backHalf.split('').reverse().join(''));
};


// console.log(isPalindromeTwo('Tony'));
// console.log(isPalindromeTwo('node'));
// console.log(isPalindromeTwo('Palindromes are everywhere'));
// console.log(isPalindromeTwo('nOoN'));
// console.log(isPalindromeTwo('Racecar'));
// console.log(isPalindromeTwo('A man a plan a canal Panama'));
