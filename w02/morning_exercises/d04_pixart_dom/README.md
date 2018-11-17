#Pixart

##Objectives
- Use jQuery to create an interactive web interface.  
- Reps using jQuery event listeners.

###Step 1

When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. 

- Create an event that listens for a click on 'set color'.
- When this event is fired, it should take the value from the color input field and make the brush swatch that color. 

###Step 2

The same thing should happen when I press the enter key from inside the input field.

- Create an event that listens for a click on enter.  
- This listener should also take the value from the color input field and make the brush swatch that color.  


###Step 3

Using jQuery, create 20 divs of the "square" class and append them to the body.

- Make the a div.
- Add a class of "square" to this div.  
- Add an event to this div so that it changes color on mouseover to the color of the brush swatch.
- Append this div to the body.
- Repeat this 20 times.  

###Step 4

Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
- Add this event to the divs that we created in Step 3.  


###Step 5

- Modify the CSS of your "square" class to change the size of the "square" divs.  
- Modify your code so that you are creating 8000 divs instead of 20.
- Change the event that changes your box colors from 'click' to 'mouseover'.
- Paint a picture!

## Bonus

- Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.