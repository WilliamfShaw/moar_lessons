Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# JS Functions

## Learning Objectives

* Define a JS function
  * that accepts input arguments
  * that returns a value
* Differentiate between defining a function and calling a function
* Define DRY, and why DRY is good
* Define variable scope
* Explain how variable scope works in JavaScript

## Outline

### Intro

* Frame the WDI learning experience - you won't understand everything always
* Frame the day, and why theoretical deep dives are good

* input-output-sideEffect
* Speaking generally, every expression in programming has some input, produces
  some side-effect, and returns some value

```js
1 + 2

3 * 5

(3 + 4) * 5

var a = 10;
var b = 20;
var c = a + b;

var colors = ["indianred", "cadetblue", "whitesmoke"];
colors.pop();
```

* Let's look at some examples of this that we've already used.

```js
alert("Hi there!");
```

```js
var username = prompt("What is your name?");
```

* Explain the substitution that is going on here.
* Use this super example

```js
var message = prompt("What greeting?") + " " + prompt("To whom?");
```

**I do**

* A function is a chunk of code we define, that we can execute multiple times
  in our program.
* I write a function to add combine two strings with a space and return the
  result

```js
var combineWords = function(firstWord, secondWord) {
  var combination = firstWord + ' ' + secondWord;
  return combination;
};
```

**You do**

* Write a function `sumOfThree` that will accept three numbers as input
  arguments, and return their sum
* Write a function `productOfThree` that will accept three numbers as input
  arguments, and return their product

```js
var sumOfThree = function(a, b, c) {
  return a + b + c;
};
```

```js
var productOfThree = function(a, b, c) {
  return a * b * c;
};
```

**I do**

### DRY

* What is DRY? Why is DRY good?
* Functions can greatly DRY up your code. If you see repeated sections of code
  in your program, see if a function can help

```js
var myScores = [3, 4, 2, 2, 1, 4, 2];
var jimbobsScores = [5, 1, 2, 1, 1, 4, 3];
var flandersScores = [2, 2, 1, 1, 2, 1, 2];

var sum = 0;
for (var i = 0; i < myScores.length; i++) {
  sum += myScores[i];
}
var myTotal = sum;

sum = 0;
for (var i = 0; i < jimbobsScores.length; i++) {
  sum += jimbobsScores[i];
}
var jimbobsTotal = sum;

sum = 0;
for (var i = 0; i < flandersScores.length; i++) {
  sum += flandersScores[i];
}
var flandersTotal = sum;

console.log(myTotal);
console.log(jimbobsTotal);
console.log(flandersTotal);

// ----------------
// OR
// ----------------

var myScores = [3, 4, 2, 2, 1, 4, 2];
var jimbobsScores = [5, 1, 2, 1, 1, 4, 3];
var flandersScores = [2, 2, 1, 1, 2, 1, 2];

var total = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

var myTotal = total(myScores);
var jimbobsTotal = total(jimbobsScores);
var flandersTotal = total(flandersScores);

console.log(myTotal);
console.log(jimbobsTotal);
console.log(flandersTotal);
```

* Now let's DRY up Timmy's laps code

```js
var thisWeekTimes = [52, 51, 53, 52, 54];
var lastWeekTimes = [54, 57, 58, 53, 54, 58];
var weekBeforeTimes = [100, 102, 142, 133, 123, 141, 120];

var sum = 0;
for (var i = 0; i < thisWeekTimes.length; i++) {
  sum += thisWeekTimes[i];
}
var thisWeekAvg = sum / thisWeekTimes.length;

var sum = 0;
for (var i = 0; i < lastWeekTimes.length; i++) {
  sum += lastWeekTimes[i];
}
var lastWeekAvg = sum / lastWeekTimes.length;

var sum = 0;
for (var i = 0; i < weekBeforeTimes.length; i++) {
  sum += weekBeforeTimes[i];
}
var weekBeforeAvg = sum / weekBeforeTimes.length;

console.log(thisWeekAvg);
console.log(lastWeekAvg);
console.log(weekBeforeAvg);
```

**BREAK**

### Arguments

* What happens if we supply the wrong number of arguments when we call a
  function?

```js
var showMeYourArguments = function(arg1, arg2) {
  console.log("First argument: " + arg1);
  console.log("Second argument: " + arg2);
};
```

* Call this function with less than two arguments
* Call this function with more than two arguments

### Scope

* Functions, a skit
  * Conduct a functions skit with name cards to demonstrate how functions work

* Throw these functions around into variables, just to make a point!

```js
// Define the `zen` function
var zen = function() {
  var meaningOfLife = 42;
  console.log('The meaning of life is ' + meaningOfLife);
};

// Call the `zen` function
zen();

// Attempt to print `meaningOfLife`
console.log(meaningOfLife); // ERROR!
```

* Pitfalls of accidental global variables!
  * Remove the `var` to demonstrate that this works now
  * Explain why this is **BAD**

![Polluting Global Space](https://www.discovermeteor.com/images/blog/pollution.jpg)

### Exercises

* Write a function called `sayHello` that console logs "Hello."

```js
sayHello();
```

* Write a function called `sayHelloTo` that accepts one input argument (string)
  called `name` and console logs a hello message to that name

```js
sayHelloTo("JimBob"); // This should console log "Hello, JimBob."
```

* Write a function called `bigOrSmall` that accepts one argument, a number, and
  console logs "This number is big" if the number is greater than 10, and "This
  number is small" otherwise

* Write a function called `oddOrEven` that accepts one argument, a number, and
  console logs "This number is odd" if the number is odd, and "This number is
  even" if the number is even

* Write a function called `embiggen` that accepts one argument, a string, and
  returns a CAPS LOCKED version of the string with an exclamation at the end

* Write a function called `reverser` that accepts one argument, a string, and
  returns a reversed version of the string

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
