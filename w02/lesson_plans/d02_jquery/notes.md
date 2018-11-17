Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Wrap it in CA$H

## Learning Objectives

- Explain what a library is in JavaScript and how we use them
- Include jQuery in a webpage
- Use jQuery selectors to select elements on the DOM
- Use jQuery methods to manipulate and update the DOM
- Use jQuery to create new DOM elements

## Outline

# What is a Library?

A library is code that someone else has written that you can include in your own application.

# Why do we use them?

We use libraries because:

- Programmers are lazy!
	- if someone else has done it why reinvent the wheel?

But seriously:

- Most libraries provide functionality that is commonly sought after, and has been crafted to do its job really really well
- You can implement the behavior yourself in most cases, but it is easier to drop a library in, than to spend your time attempting to solve a problem not directly related to what you are currently working on
	- focus on what's important: solving YOUR problem

## What are some common JavaScript libraries used today?

- jQuery
- Backbone.js
- Underscore.js
- Handlebars.js
- Bootstrap.js
- Jasmine
- d3.js
- three.js

# What is jQuery?

`go to jquery website`

- jQuery is a library created to make traversing the DOM much simpler, and quicker.
- jQuery is included in most webpages on the internet because it works across almost all browsers: old and new.

**EVERYTHING** that you can do with jQuery can be done using regular JavaScript. jQuery just makes it faster to do DOM manipulation because of all of the helpers that it provides. And in many cases in far fewer lines of code.

### How does it do that? `provides a special object that gives our js superpowers`

# How do we include jQuery in our webpages?

We can include the entire codebase in a separate file

**OR**

We can use a CDN

_Aside_

A CDN is a content delivery network. It works by storing copies of information on multiple servers in different parts of the world. Its job is to speed up access to information: if you want the information you go to the closest CDN. PRO: don't have to have a copy of the library (~10000 lines of code) CON: if you don't have internet, you have no access to the library

```
Facebook in CA ----------------------------------- You in NY

Facebook in CA --- Facebook in TX --- Facebook in Il --- You in NY
```

We have to add a script tag with a src attribute set to the address of the CDN - `www.cdnjs.com`

#### COPY INTO SLACK `http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js`

# How do we select elements on the DOM?

#### Before:

```
document.getElementById();
document.getElementsByTagName();
document.getElementsClassName();
document.createElement();
document.createTextNode();
```

What's wrong with this:

- its tedious and alot of typing, more prone to errors
- have to remember so many different methods that all kind of do the same thing
- not always intuitive how you can access and change certain properties of the element

#### How does jQuery try to fix this?

`$();`

First, onload function:

```
$(function(){
	console.log('Loaded, bro');
});
```
This onload differs slightly: the window.onload function will only fire once the HTML, Images and other assets have finished loading in the web page. jQuery only waits for the HTML before it takes control of the DOM.

jQuery provides a universal selector function. It relies on CSS-selectors in order to access elements from the DOM. Since it uses all of the same selectors you can use in your CSS it allows you to be as general or as specific with your selection as needed.

Access the body

## What happens when we wrap it in cash?

- It stores a reference to the element on the DOM
- It creates a new jQuery object that is a representation of the DOM element you have selected

```
var body = $('body');
```

- let's look at the jQuery object
	- looks like an array that has some DOM element inside of it.
	- if we use `[]` we are able to gain access to the vanilla DOM element that has been selected

Remember how classList yesterday returned a weird array looking object? jQuery does the same when you use it to select DOM elements.

Think of the jQuery as putting an exo-suit on your DOM elements that allows you to do extraordinary things with them. Before we see what kind of things our extraordinary jQuery objects can do let's practice using the jQuery selector to grab and store references to DOM Elements!

**We Do** - 5 minutes

**WE USE CSS SELECTORS TO FIND ELEMENTS**

Access the h1 tag
Access the divs
Access the li tags
Access only the li tags with a class of `swag`
Access the element with the ID `awesome`
Access the a tags in the list elements

```
var h1Tag = $('h1');
var div = $('div');
var google = $('a.google');
var liTags = $('li');
var swagLis = $('li.swag');
var linkHolder = $('div.link-holder');
var awesomeEl = $('#awesome');
var aTag = $('li a');
```

# How do we manipulate elements on the DOM?

To manipulate the elements that we have accessed jQuery provides a set of helpful methods.

### Getting and Changing content

`.html()`

- getter -> returns a string
- setter -> will set the HTML of that element to whatever you provide as an argument

`.text()`

- getter -> returns a string that is the text node of the element
- setter -> will set the text node of the element selected to whatever you provide as an argument

**WE DO**
- set the text of the google link to be `GO TO GOOGLE`
- set the html of the link holder div to be the google link

What happened to the other links?
- html as a setter will replace any other html inside of the element

# BREAK

### Manipulating Elements

##### illustrate - DRAW DOM TREE ON BACK WALL

`.append() and appendTo()`

`.prepend() and prependTo()`

`.empty() and remove()`

**WE DO**

- Append the ul with the class of second to the link-holder div
- prepend the link-holder div to the container div
- empty the section with the class of asides and append all asides that exist in the page to it.

### Changing CSS properties and Attributes

`.css()`

**MAKE H1 CORNFLOWERBLUE**

- getter -> will return the value of the css property provided as an argument
- setter -> if given a key-value combination it will add the css styling to the current selected element

**MAKE ALL LI's INDIANRED**

- If multiple elements have been selected it will add the styling to all selected elements, not just one.

`.addClass() and .removeClass()`

**ADD CIRCLE CLASS TO SECTION CIRCLES DIVS** `$('.circles div').addClass('circle')`
**REMOVE CIRCLE CLASS FROM ALL DIVS**

`.attr() and .removeAttr()`

**GET ID of the ASIDE** `$('aside').attr('id');`

`.height() and .width()`

**GET HEIGHT AND WIDTH OF BODY**

### Finding Elements - DRAW ON BOARD

```
<div>
	<section>
		<ul>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</section>
</div>
```

`.find() and .closest()`

find will look within the element for a certain match `$('.second').find('li') -> multiples possible
closest will start with itself, then look at it's parent and subsequent ancestors for some match -> one possibility

`.parent() and .children()`

`.eq()`

# How do we create new DOM elements?

In addition to being able to access and change existing DOM elements jQuery also allows you to quickly and easily create new DOM elements.

```
var circleSection = $('section.circles');
var newDiv = $('<div>');
newDiv.addClass('circle');
newDiv.appendTo(circleSection)
```

When a new DOM element is created it will not be visible until it is attached to an existing DOM element.

**MAKE THAT PONY WALK YO**

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?

