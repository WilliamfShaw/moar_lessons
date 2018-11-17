# NotetakerApp

Today we are going to build out Notetaker with a Router.  You will be provided with a working App as part of your starter pack.  

## Step 1 - Setting up files

The files have largely been organized for you.  However tonight, please observe how the files have been organized in subdirectories.  The script tags have been formatted to reflect.  

You need to add a router.js file within the routers directory in your js directory.  

You should also add a script tag for this file.  You may add this script tag as the last tag in the listing of scripts.  

## Step 2 - Define Router Constructor and a new router in app.js

In router.js, please define a Router, name-spaced appropriately.  You may start by just including an initialize function here.  

In app.js, add an object within the `App` variable to hold our routers.

In the onload function, please declare a new router for our app AND THEN call Backbone.history.start().

## Step 3 - Adding Navigation

Our App needs the path to change for:

* the show page for an individual note
	-`note/:id`
* the edit page for an individual note
	-`note/:id/edit`
* the new note page to make new notes
	-`new`
* returning to the homepage.
	-`''`

Please add the router navigations to reflects these changes in your app.  

Step 4 - Adding Routes and Routing Functions

We will be setting four routes and corresponding route functions.

* `''` - index (takes us to the homepage).
* `'new'` - new (takes us to a new form).
* `'note/:id'` - show (takes us to the page that show's a note).
* `'note/:id/edit'` - edit (takes us to the page to edit a specific note).

Please write routing functions that allow a user to return to any of these pages in our app.  
