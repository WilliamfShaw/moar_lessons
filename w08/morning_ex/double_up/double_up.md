###### Morning Ex 8-02

### Character Counter

Write a function that will accept a string and return an object.
The object returned should have all of the characters and/or whitespace in the
string as properties. The  values should be the number of times each character
appears in the input string.
ex: characterCounter('heyy gurl heeey')
=>  { ' ': 2, '!': 1, e: 4, g: 1, h: 2, l: 1, r: 1, u: 1, y: 3 }


### Ice Sheen Panda

Use jQuery to create 3 images and append them to the body.

- The image sources should be one of the following:
  - http://nicenicejpg.com/200/200
  - http://placesheen.com/200/200
  - http://media.npr.org/assets/img/2012/01/04/ap99121501386_custom-feedbb6efa738efee47e7828e805758dc427fa60-s6-c30.jpg
- Give the first image a class of `ice`
- Give the second image a class of `sheen`
- Give the third image a class of `panda`

### Step 2

Look through the documentation on the mouse event method [pageX](http://api.jquery.com/event.pageX/)

Create an h1 tag and append it to the body. Define a mousemove event on the body of the document. The function defined for the mouse event should have a single parameter, an event object. On mousemove, set the text of the h1 to be the X and Y coordinates of the mouse

### Step 3

Modify your code so that on mousemove the top margin and left margin of the first image changes by a factor of the Y-coordinate and X-coordinate respectively.