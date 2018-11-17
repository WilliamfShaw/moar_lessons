# Week 1 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code.

Please copy this directory to your w02d05 directory.  THEN...

The first 4 questions will test you ability to recall and explain core concepts from the week with your own words. Please answer them in the this markdown itself. Each question should be answered within a few sentences.    

The next 3 questions will test your ability to use JavaScript Constructors.  Please work in scripts/cupcake.js

The last 3 questions will test your ability to manipulate the DOM with jQuery.  Please work in scripts/park.js

## Concepts

1. What is the DOM?

<!-- Answer here -->

2. What is jQuery? Compare/Contrast jQuery with Vanilla JS.

<!-- Answer here -->

3. Explain how an event listener function works in JavaScript.

<!-- Answer here -->

4. What is a Constructor Function?  How does it differ from the Object Factory Functions we wrote last week?

<!-- Answer here -->

## Practice

### Constructors

5. Using a Constructor Function, create a Cupcake Object Constructor. The function takes two parameters, cakeFlavor and frostingFlavor. The Cupcake object has the following attributes:
	*`cake` - set from the parameter cakeFlavor.
	*`frosting` - set from the parameter frostingFlavor.
	*`sprinkles` - should be initially set to false.  

6. Add the following behaviors to the Cupcake using Prototypes.  
	*`getCake()` - a getter method that returns the cake type of a Cupcake.
	*`getFrosting()` - a getter method that returns the frosting type of a Cupcake.
	*`hasSprinkles()` - method that returns true if a Cupcake has sprinkles and false if it does not.
	*`addSprinkles()` - a method that adds sprinkles to a Cupcake by changing sprinkles to true.  
	*`reFrost(newFrosting)` - a setter method that changes the frosting flavor of a Cupcake.  

7. Demo your Cupcake Constructor by:
	a. Create a new cupcake called `doubleChoc` that has both `'chocolate'` flavored cake and frosting.
	b. Get the frosting and cake of `doubleChoc`.
	c. Refrost `doubleChoc` with `'White Chocolate'` frosting.
	d. Add sprinkles to `doubleChoc` and THEN check if `doubleChoc` has sprinkles.  

### DOM/jQuery

8. Edit the third `li` on the page to change it's text from `'Tony'` to `yourname`.  

9. Append an `h1` tag to the body of this page.  This `h1` should have the text "$uite Park Time".  

10. Add a click event to the `div` on the page with the id `duck`.  This click event should change the id of this div to `weaselpecker`.  When the click event fires, the duck image  should change to a weaselpecker image.  
