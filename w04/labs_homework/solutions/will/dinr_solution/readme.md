### Din.R

![sticker image](http://newyork.seriouseats.com/images/2013/05/20120810-flushing-tour-closed-sign.jpg)


### Learning Objectives
 - Practice with AJAX requests
 - Practice utilizing remote data in our applications
 - Practice with DOM manipulation 
 - Practice with Handlebars


Tonight we will be using a suite API called Din.R, a **DrRobotmck production**.

Here is the [Din.R API documentation](https://github.com/DrRobotmck/dinr_api/blob/master/README.md). Please read them some to gain appropriate context for the terms used through out the assignment. 

### Step 0

Copy the starter folder from ASSIGNMENT_FILES into your folder for today. 

### Step 1

- In the `js` folder inside of your starter folder make a new file `app.js`

### Step 2 

- In `app.js` write a function `getDba` this function should
	- make an AJAX request to the server using the business name and borough
	- when the AJAX function is finished `showDba` should be called
- Set up a click event on the button to call this function

### Step 3

- Write a handlebars template that will store the `camis` ( data attribute, `;)` )and display the `name`, `address`, and `phone_number` of a business
- In `app.js` write a function `showDba` which will accept an argument `data` this function should
 - render all of the results of the search to the DOM.  

### Step 4

- In `app.js` write a function `getRestaurant` this function should
 - make an AJAX request to the server using the `camis` number 
 - when the AJAX function is finished `showRestaurant` should be called
- Set up a click event on each `result` to call `showRestaurant` 

### Step 5
- Write a handlebars template that will give you the `name`, `total_inspections` and `grade` of the business.
- In `app.js` write a function `showRestaurant` which will accept an argument `data` this function should
	- render all the results of the search to the DOM in the `show-modal`, this is an invisible div that already exists in `index.html`. You can `show` it through jQuery. 
- Set up a click event on `show-modal` to hide it again.

### Step 6
- In `app.js` write a function `getButton` this function should
	- make an AJAX request using the borogh and name of the button. ex (italian button will search for italian food in the specified borough)
	- when the AJAX function is finished `showDba` should be called
- Add a few more buttons to the `search-bar`
- Set up events for these buttons

#BONUS

- To your `showRestaurant` function
 - add the ability to see the date and violation description of all of the inspections for a business
 - render to the `show-modal`
























