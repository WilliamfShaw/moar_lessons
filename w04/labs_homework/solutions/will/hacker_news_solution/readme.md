# TECH NEWS FEED

### Learning Objectives
- Practice using AJAX to get remote data
- Practice with Backbone
- Practice using AJAX with Backbone
- Practice using Backbone collections to store API response data

Tonight we will be using the Hacker News API to set up our own news feed!!

Here is the [HACKER NEWS](https://github.com/HackerNews/API) documentation, please read before starting. 


### Step 0

- Copy the starter folder into your folder for today. 

### Step 1

- In your `js` folder you will need to make the following:
 - `model` folder with the following files in it:
  - `article.js`
 - `view` folder with the following files in it:
  - `article.js`
  - `articles.js`
  - `articleModal.js`
 - `collection` folder with the following files in it
  - `articles.js`
- set up your `App` with `Models`, `Views` and `Collections`
 
### Step 2
#### Make a model

- In your `model` folder's `article.js` file set up your model
- your model should have an `initialize` function that will console log that a model was created

### Step 3
#### Make a Collection

- In your `collection` folder's `articles.js` file set up your Backbone collection
- your collection should have the following attributes and behaviors
  - `model` set to the `article model`
  - `initialize`
  - `getArticles`
  - `addToCollection`
  - `getArticleInfo`
  - `updateModel`
- `initialize` should perform the following
  - should console log that the collection was loaded
- **BEFORE PUTTING ANYTHING ELSE INTO INITIALIZE MOVE TO YOUR** `app.js` folder and make a new articles collection `App.collection` in the on load function. 
  - should call call the `getArticles` function
- `getArticles` should perform the following
  - should make an AJAX request to get the `top stories`
  - when the AJAX request is DONE it should call the `addToCollection` function
- `addToCollection` should accept an argument `data` it should perform the following
  - should `add` a model to the collection for each result it recieved.
  - should set the `id` of each model added to the corresponding id number in the response data 
  - **TEST THIS AND MAKE SURE YOUR COLLECTION IS BEING MADE BEFORE MOVING ON**
    - HOW TO TEST: If you call `App.collection.models` in your console you should have a full models array
  - after all models have been added and your code is working, the last thing this function should do is call the collection's `getArticleInfo` 
- `getArticleInfo` should perform the following
  - should make an AJAX for each of the models in your collection to get the `item` associated with the `id` of the article from the hacker news API.
  - when the AJAX request is DONE it should call the `updateModel` function
- `updateModel` should accept an argument `data` 
  - it should get the model from the collection by the `id` property
  - it should `set` the attributes of the model with the `author`, `title` and `url` data recieved

### Step 4
### Make a view for a single result

- In your `index.html` make a template that will display the `author` in an element with a class of `author` and `title` in an element with a class of `title`

- In your `view` folder's `article.js` set up your view for a single article
- your view should have the following attributes and behaviors
  - `className`
  - `initialize`
  - `render`
  - `events`
  - `showModal`
- `className` should be set to `article-result`
- `initialize` should perform the following
  - should console log that a view was loaded
  - should set the template to the template you created in `index.html` for this view
  - should listen for a `change` in the model and `render` if a change was detected
- `render` should perform the following
  - should fill out your template with the information from the model
  - should set the `html` of the `$el` to the completed template
- **LEAVE EVENTS AND SHOW MODAL ALONE FOR NOW**
- **TEST THIS BEFORE MOVING ON*** 
  - HOW TO TEST: If you run the following code in your console:
  
  ```
  var article = App.collection.last();
  var view = new App.Views.Article({ model: article });
  view.render();
  view.$el
  
  ```
  - you should see the result html with the contents of your article in it.

### Step 5
#### Make a collection view


- In your `view` folder's `articles.js` set up a view for your collection
- your view should have the following attributes and behaviors
 - `el`
 - `initialize`
 - `render`
 - `renderOne`
- `el` should be set to the element with id `article-preview`
- `initialize` should perform the following
  - should console log that a collection view was created
  - should listen for anything being `add`ed to the collection and should `renderOne` if something was added
  - should call `render`
- `render` should perform the following
  - should `empty` the `el`
  - should take each item in the collection and `renderOne`
- `renderOne` should accept an argument `model` it should perform the following
  - should make a new single view the `model` being passed in
  - should append the `$el` of the new view to `this $el`

- In `app.js` add a new instance of this collection view called `App.articlesView`, set the collection of this view to `App.collection`

### Step 6
#### Make the MODAL (not model) view

- In your `view` folder's `articleModal.js` set up a view for your modal
- your view should have the following attributes and behaviors
  - `el`
  - `initialize`
  - `render`
  - `events`
  - `hide`
- `el` should be set to the element with id `article-modal`
- `initialize` should perform the following
  - console log that a modal view was created
  - should set up a template `#modal-template` which has been provided. **WHAT IS THAT SWEET SWEET [IFRAME](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)????**
- `render` should perform the following
  - should empty the `$el`
  - should fill out your template with the information from the model
  - should append the completed template to the `$el`
- `events` should set a click event on the `close` id and call `hide`
- `show` should show the `$el` 
- `hide` should hide the `$el` 


- In `app.js` make a new instance of the modal view `App.articleModalView` 

- **TEST THIS BEFORE YOU MOVE ON**
-   - HOW TO TEST: If you run the following code in your console:
  
  ```
  var article = App.collection.last();
  var view = new App.Views.ArticleModal({ model: article });
  view.render();
  YOU MAY GET RANDOM ERRORS HERE DISREGARD THEM
  view.show()
  
  ```
  - you should see the modal with the contents of your article in it.

### Step 7
#### 

- Back in your `view` folder's `article.js`
  - set your events and `showModal` function up
  - `events` should set a click event to the `title` class, calling `showModal`
  - `showModal` should perform the following
    - set the model of the article modal view to `this` model
    - should render the article modal view
    - should `show` the modal, using the modal's `show` method


























