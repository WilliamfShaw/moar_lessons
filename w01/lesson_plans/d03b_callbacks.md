Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# JS Callbacks

## Learning Objectives

* Define what a callback is in JavaScript
* Pass functions as arguments to other functions

## Outline

**You do in pairs**

* Let's pass functions around into different variables and call them.

* Create that `index.html` and `callbacks.js`. Put the following into
  `callbacks.js`

```js
var hello = function() {
  console.log("Hello");
};
```

* Then, open up your `index.html` in your browser and try the following one at
  a time. Think about what each statement is doing.

```js
hello();

var greeting = hello;

greeting();

var ola = hello;

ola();

var yo = ola;

yo();
```

**I do**

So what did we see? Let's discuss how we should never forget that these
functions are just things we can store in variables, and pass around.

Time for mind-bend

```js
var doSomethingThrice = function(thingToDo) {
  thingToDo();
  thingToDo();
  thingToDo();
};
```

**You do**

* Write a function called `doSomethingNTimes` that accepts two arguments
  * A function to execute (`thingToDo`)
  * A number indicating how many times to execute `thingToDo`


```js
var doSomethingNTimes = function(thingToDo, times) {
  for (var i = 0; i < times; i++) {
    thingToDo();
  }
};
```

### setTimeout

Time-permitting

```js
var thingToDo = function() {
  console.log("It's time to do that thing today,");
  console.log("Today's cartoon network thing to do,");
}
setTimeout(thingToDo, 5000);
```

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
