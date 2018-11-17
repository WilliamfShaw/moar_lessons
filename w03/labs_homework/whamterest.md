## Welcome to WHAMterest

![wham image](https://dmri.cachefly.net/nowmagazine/images/comps/wham_bar14_400x250.jpg)

#### Learning Objectives

- Practice setting up a Backbone app. 
- Use Backbone to organize your code
- Use Backbone and jQuery to create entries in local storage and update the DOM
- Use Backbone and jQuery to remove entries from local storage and update the DOM

This evening you are going to create a single-page Backbone app that uses jQuery to manipulate the DOM, while using local storage to keep track of your Whamterest board.

### Setup
Copy the starter app into your folder for today and set it up.

- Make a new folder called js
	- In this folder create the following files
	- `app.js`
	- `postsCollection.js`
	- `postModel.js`

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
	- `localStorage` set to `whamterestLocalStorage`
- In your console, test this out. Make sure you can make a new post before moving forward. 

#### Render a single post
##### In app.js

- create an object literal called `App`
- `App` should have the following behavior
- `renderPost(postModel)`
- This function should accept a single parameter, an Backbone model representing a post
- Using jQuery it should build the HTML element representing a post and display it on the screen.
	A post should have:
	- a title
	- an image_url
	- content
	- an author
	- a button to delete the post

```html

<div class="post" id="LOCAL STORAGE ID">
	<p class="title">TITLE</p>
	<img class="image" src="IMAGE SOURCE">
	<p class="content">CONTENT</p>
	<p class="author">AUTHOR</p>
	<p class="delete" data-id="LOCAL STORAGE DATA ID">delete</p>
</div>

```

- In your console create a new post model, call `renderPost` and make sure it appears in the DOM. 

### Make a Collection
##### In postsCollection.js

- `postsCollection.js` should have a `new` instance of backbone local storage set to `whamterestLocalStorage`
- `postsCollection.js` should have a Backbone collection called `PostsCollection`
- `PostsCollection` should have the following attributes and behaviors
	- `initialize` which will console log that a model was created.
	- `model` set to the `Post` model
	- `localStorage` set to `whamterestLocalStorage`

### Bring it together
##### Back in app.js

- `app.js` should have an on load function
	- `app.js` should have the following events
		- when a user clicks `WHAM it up` a new post should be made
		- when a user clicks `delete` the post should be deleted and removed from the DOM
- Add the following attributes and behaviors to `App`
- `collection` set to a `new` `PostsCollection`
- `createPost()` 
	- When the user clicks the `HHM It Up` button a request should be made that will send all of the parameters necessary from the html inputs to create a new post
	- The newly created post should then be rendered and displayed onscreen

- `renderAllPosts()`
- This function should iterate over the collection of Backbone models returned from fetchPosts and display them onscreen

- `deletePost()`
- When the user clicks the delete button, a request should be made that will remove the object associated with the post from local storage.
- The post should be removed from the DOM


