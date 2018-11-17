# NotetakerApp

Today we are going to get some more reps in with our new friend Backbone!

We will be building an app called Notetaker.  Notetaker allows users to create, read, update, and delete notes.  

## Step 1 - Setting up files

WHAMCO. will be providing you with an index.html file and a style.css file.  index.html will include all necessary library script tags.  style.css includes a delectably curated style theme carefully chosen by our design team.  

You are to create the following .js files:

* noteModel.js - a model of notes in our app

* notesCollection.js - a collection of our note models in our app

* notePreviewView.js - a model view for each note model in our preview list (left sidebar)

* notePreviewListView.js - a collection view for all note previews (left sidebar)

* noteView.js - a model view for a note.  This is the full view of the note with the note content (main view).

* app.js - the javascript file that starts your app.  

Include script tags for each of our javascripts.

You are to include the following templates in your index.html file within template tags.  

* note-preview template - each note in the preview list in the left sidebar.  

```html 
<div class="note">
	<p class="note-title">
		{{title}}
	</p>
	<span class="delete">X</span>
</div>
```

* full-note template - each note view in the main area of the page (includes title and content).

```html
<p class='new'>new note</p>
<p class='delete'>delete</p>
<div class="input">
	<p class="note-title">{{title}}</p>
</div>
<br>
<div class="input">
	{{content}}
</div>
<br>
<input type="button" value="Edit" class="button edit">

```

* new-note template - form used to create a new note.

```html
	<div class="input">
		<input type="text" name="title" id="title" placeholder='Add a title...' autocomplete="off">
	</div>
	<br>
	<div class="input">
		<textarea name="content" id="content" placeholder='Start typing here...'></textarea>
	</div>
	<br>
	<input type='button' value="Create" class="button create">
```

* edit-note template - the form used to edit an existing note.

```html
<div class="input">
	<input type="text" name="title-update" id="title" value='{{title}}' autocomplete="off">
</div>
<br>
<div class="input">
	<textarea name="content-update" id="content">
		{{content}}
	</textarea>
</div>
<br>
<input type='button' value="Update" class="button update">
```

## Step 2 - making Note Model and Collection 

Create a Note Model in noteModel.js.  

Please first declare a variable to set Local Storage for our model.   

The model should have defaults for `title` and `content`.  It should also have localstorage set here.  It should also have an `initialize` method that logs a useful message to the console.

Create a Notes Colleciton in notesCollection.js.  

The collection should have an `initialize` method that logs a useful message to the console.  It should also set the model for this collection to be the NoteModel.  

Use the console to test that you can make new NoteModels and that they are reflected as part of your NotesCollection.  Make sure that you can perform all basic CRUD functions here in the console before moving on to the views.  

## Step 3 - Notes Preview List View

The Notes Preview List is a collection view of Note Preview View. (Left Sidebar)

Define the following properties for your view:

- el: `#preview-list-view`,
- initialize
	- should add two listeners: `add`
	- `add` should fire renderNotePreviewItem
- renderAllPreviews
	- should iterate over the collection creating single previews,
	  using `renderOnePreview`
- renderOnePreview
	- should create a new note preview and append it to the list view
	- it should take a `noteModel` as an argument.

## Step 4 - Note Preview View

The Note Preview View is a model view for each model in the Notes Preview List View. (Left Sidebar)

Define the following properties for your view:

- initialize
	- should assign the template and two listeners.
		- the template used here is the note preview template
		- `change` - should fire render
		- `remove` - should fire remove
	- should call render
- render
	- should render the template and set the html of the view's el.
- events
	- add a click event for p tags within this view. the callback that should be triggered is `showNoteView`
	- add a click event for the span tag of class `delete` within this view.  The callback triggered is `deleteNote`.

- showNoteView
	- should set the model of the App.noteView to the model of the current Preview
	- once the model has been added it should call the noteView's `showNote` function
- deleteNote
	- should destroy the model for this view.  

## Step 5 - Note View

Define the following properties for the Note View:

- el -> `#note-view`
- initialize
	- should set the following templates on the view
		- `fullTemplate`
		- `editTemplate`
		- `newTemplate`
	- should call `newNote` at the end
- events
	- clicking `.new` should trigger `newNote`
	- clicking `.create` should trigger `createNote`
	- clicking `.edit` should trigger `editNote`
	- clicking `.update` should trigger `updateNote`
	- clicking `.delete` should trigger `deleteNote`
- showNote
	- This function should render the `showTemplate`
- newNote
	- This function should render the `newTemplate`
- createNote
	- This function should take the values of the input box and text area and create a new model. The model should be added to the collection and stored in the database. The most recently added model should be retrieved from the collection and set as the model of the view. Once the view's model has been set the new model information should be rendered and displayed
- editNote
	- This function should render the `editTemplate`
- updateNote
	- This function should take the values of the input box and text area and use that to update the view's current model. After the model has been updated the new model information should be rendered and displayed
- deleteNote
	- this should destroy the current model and render the `newTemplate`
-setNote
	-this should set the model of this view and take an argument a note.  It should then call this.render.  

#### app.js

Provided below is the initialize function you should add to `App`:

```javascript
var App = {};

$(function() {
	App.notes = new NotesCollection;
	App.notesPreviewListView = new NotesPreviewListView({ collection: App.notes });
	App.noteView = new NoteView({model: new NoteModel()});
	App.notes.fetch();
	App.notesPreviewListView.renderAllPreviews();
});

```
