#Week 1 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code. 

Please copy this directory to your w02d05 directory.  Once you do that.  

The first 4 questions will test you ability to recall and explain core concepts from the week. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The next 3 questions will test your ability to use JavaScript Contructors.  Please work in scripts/cupcake.js

The last 3 questions will test your ability to manipulate the DOM with jQuery.  Please work in scripts/park.js

##Concepts

1.What is the DOM?

The DOM (Document Object Model) is a structure used to model/organize the elements in a web document.  It is built on the idea that elements on a web page have a hierarchical relationship with other elements on the page.  At a high level, elements that are inside other elements are children of the containing element, while containing elements are a parent to those interior elements.  

2.What is jQuery? Compare/Contrast jQuery with Vanilla JS.   

jQuery is a JavaScript library that is used to easily manipulate the DOM.  While everything that can be achieved with jQuery can be achieved using Vanilla JS, jQuery provides shorter syntax, replacing full Vanilla JS statements with a '$'.

3.Explain how an event listener function works in JavaScript.

An event listener is a function that 'listens' for a browser 'event' to occur on an element in the DOM.  When this event occurs, the listener has instructions for what should happen next as a result of this event.  For example, a listener could listen for a 'click' on an h1 tag, resulting in the h1 tag changing text color.  

4.What is a Constructor Function?  How does it differ from the Object Factory Functions we wrote last week?

A constructor function is a JavaScript function used to create objects of the same type (with the same attributes and behaviors).  Unlike the object factory functions we wrote last week, constructor functions allow for prototypical inheritance, meaning that we can add behaviors to all objects created by the same constructor function, even retroactively.  

##Practice

###Constructors

6.Using a Constructor Function, create a Cupcake Object Constructor. The function takes two parameters, cakeFlavor and frostingFlavor. The Cupcake object has the following attributes:
	*`cake` - set from the parameter cakeFlavor.
	*`frosting` - set from the parameter frostingFlavor.
	*`sprinkles` - should be initially set to false.  

7.Add the following behaviors to the Cupcake using Prototypes.  
	*`getCake()` - a getter method that returns the cake type of a Cupcake.
	*`getFrosting()` - a getter method that returns the frosting type of a Cupcake.
	*`hasSprinkles()` - getter method that returns true if a Cupcake has sprinkles and false if it does not.    
	*`addSprinkles()` - a method that adds sprinkles to a Cupcake by changing sprinkles to true.  
	*`reFrost(newFrosting)` - a setter method that changes the frosting flavor of a Cupcake.  

8.Demo your Cupcake Constructor by:
	a. Create a new cupcake called `doubleChoc` that has both `'chocolate'` flavored cake and frosting.
	b. Get the frosting and cake of `doubleChoc`.
	c. Refrost `doubleChoc` with `'White Chocolate'` frosting.
	d. Add sprinkles to `doubleChoc` and THEN check if `doubleChoc` has sprinkles.  

###DOM/jQuery

8. Edit the fourth `li` on the page to change it's text from `'Tony'` to `yourname`.  

9. Append an `h1` tag to the body of this page.  This `h1` should have the text "Suite Park Time".  

10. Add a click event to the `div` on the page with the id `duck`.  This click event should change the id of this div to `weaselpecker`.  When the click event fires, the duck should change to a weaselpecker.  
