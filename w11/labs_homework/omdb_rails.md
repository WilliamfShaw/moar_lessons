# Backbone + OMDBapi = OMGLOLWUT

## User Stories

* As a user I would like to be able to sign up, log in and log out.
* As a user, when I enter information into the search box (and click on
  'search'), I want to see a list of movies matching my search, so I can find
  the movies I am thinking of.
* As a user, when I click on a search result in the list, I want a modal to pop
  up, so I can view more details about the movies I am interested in.

### Your server models

* **movie**
  * imdbID
  * title
  * year
  * genre
  * plot
  * poster_url
  * imdbRating

* **user**
  * username
  * password

### Your server routes

* **get '/'**
  * this route should serve your starting page
* **get '/movies/search'**
  * this route should accept a single search string as a query parameter
  * this route should use the search string to query OMDBapi and return a list
    of movie model objects in JSON format
* **get '/movies/:id'**
  * this route should accept a single query parameter to use as an imdbId
  * this route should use the imdbId to query OMDBapi and return the corresponding
    movie model object in JSON format
* **post '/users'**
  * this route should create a new user in the db and also log a user upon creation.
* **post '/sessions'**
  * this route should create a user session
* **delete '/sessions'**
  * this route should destroy the current session


## The Backbone

**Some reminders, tips, suggestions, hints:**

* You may use the backbars gem to load required javascript libraries
* Start by setting up your models and then collections
* Remember, you will need two different movie views (one for each search result,
  one for the detailed modal)
* Can you send query parameters when you `collection.fetch()`? Yes you can! Find
  out how. This will enable you to reuse the same collection for all searches
  without having to keep modifying the `url` property for each search.
