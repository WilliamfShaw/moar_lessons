## WHAMterest has made it BIG!!

![wham image](http://www.kboing.com.br/fotos/imagens/4be2bff1ef98d.jpg)

#### Learning Objectives

- Practice setting up a Backbone app. 
- Use Backbone to organize your code
- Use HandleBars templates to create your reusable HTML.
- Use Backbone views, templates and jQuery to create entries in local storage and update the DOM
- Use Backbone to set up events and event Listeners
- Use Backbone to remove entries from local storage and update the DOM

This evening you are going to create a single-page app that uses Backbone, templates and jQuery to manipulate the DOM, while using local storage to keep track of your Whamterest board.

### Setup
Copy the starter app into your folder for today and set it up.

- Make a new folder called js
	- In this folder create the following files
	- `app.js`
	- `postsCollection.js`
	- `postModel.js`
	- `postView.js`

### Make a Model
##### In postModel.js 

- `postModel.js` should have a `new` instance of backbone local storage set to `whamterestLocalStorage`
- `postModel.js` should have a Backbone model called `Post`
- `Post` should have the following attributes and behaviors
	- `initialize` which will console log that a model was created. 
	- `defaults` which will give the model default values
		- A post should have:
		- a title
		- an author
		- an image_url
		- content
		- a category
	- `updateImage(image)` which will accept an argument, a string, will set the current posts image equal to the argument string	and save the model.
	- `localStorage` set to `whamterestLocalStorage`
- In your console, test this out. Make sure you can make a new post before moving forward. 

#### Create a Template
##### In index.html

- Use your new templating skills to make a template that will create the following html. 

```html

<div class="post" id="MODEL ID">
   <p class="title">TITLE TEXT</p>
   <img class="image" src="IMAGE URL">
   <input class="image_url" value="IMAGE URL">
   <p class="update">Update Image</p>
   <p class="content">CONTENT TEXT</p>
   <p class="author">AUTHOR TEXT</p>
   <p class="delete" data-id="MODEL ID">Delete</p>
</div>

```

#### Create a View
##### In postView.js

- `postView.js` should have a Backbone view called `PostView`
- `PostView` should have the following attributes and behaviors
	- `className` set to `'post'`
	- `initialize()` should do the following:
		- listen for a `change` event, if a change is deteced `render` should be called
		- should set the `template` for `this` view, referencing your Handlebars template `#id`. 
		- should `render` your view.
	- `render()` should do the following:
		- should store the model data in JSON	
		- should compile the model data to the template
		- should set the `$el` `html` to the compiled template
	- `events` should do the following:
		- when the `update` button is pushed the `update` function should be called
	- `update` should do the following:
		- should get the value of the user input for updating an image
		- should use the `updateImage` function of the current model.
- In your console, test this out. Make sure you can render a view before you move on. 

### Make a Collection
##### In postsCollection.js

- `postsCollection.js` should have a `new` instance of backbone local storage set to `whamterestLocalStorage`
- `postsCollection.js` should have a Backbone collection called `PostsCollection`
- `PostsCollection` should have the following attributes and behaviors
	- `counter` set to `0`
	- `initialize` which will console log that a model was created.
	- `next()` should do the following:
		- increment the counter by 1
		- if the counter is equal to or higher than the length of the collection the counter should be reset.
		- should return the model at the index of the counter. 
	- `back()` should do the following:
		- should decrease the counter by 1
		- if the counter is less than 0 it should set the counter to 1 less than the collection length.
	- `model` set to the `Post` model
	- `localStorage` set to `whamterestLocalStorage`		

### Bring it together
##### Back in app.js

- `app.js` should have an on load function
	- `app.js` should have the following events
		- when a user clicks `WHAM it up` a new post should be made
		- when a user clicks `next` the program should load the next post
		- when a user clicks `back` the program should load the previous post
- Add the following attributes and behaviors to `App`
- `collection` set to a `new` `PostsCollection`
- `createPost()` 
	- When the user clicks the `WHAM It Up` button a request should be made that will send all of the parameters necessary from the html inputs to create a new post
	- The newly created post should then be rendered and displayed onscreen
- `loadNext()`
	- if the collection length is not 0 this function should do the following: 
		- empty the post container
		- get the `next` post in the collection
		- create a new `PostView` with next post
		- append the view to the DOM using `appendNewView`
- `loadPrevious()`
	- if the collection length is not 0 this function should do the following: 
		- empty the post container
		- get the `back` post in the collection
		- create a new `PostView` with next post
		- append the view to the DOM using `appendNewView`
- `appendNewView()` 
	- should accept an argument, a Backbone view
	- should append the view to the post container. 



