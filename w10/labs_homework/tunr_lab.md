# Lab


## Learning Objectives

- Create a web app using the MVC architecture of Rails
- Utilize Rails conventions to create database tables and seed them
- Utilize Rails form, link and path helpers
- Add validations to an Active Record model
- Add relationships to Active Record models


## Step 1 - Rails Set Up

Create a new rails app called `tunr_app`. Make sure that your database is set to PostgreSQL when you initialize your rails app. Create your database. Include the `pry-rails` gem and bundle install again.


## Step 2 - Migrations and Tables
You will have three tables, artists, songs, playlists. 

#####Artist

Generate a new migration for artists. An artist entry should have:

- name - a String
- nationality - a String
- timestamps


#####Song

Generate a new migration for songs. An song entry should have:

- title - a String
- album - a String
- preview_url - Text
- artwork - a String
- price - an Integer (in cents)
- artist_id - An Integer
- timestamps

> CHECKPOINT: Test your models by entering the Rails console and creating some songs and artists

## Step 3 - Model validations and relationships

Create a new models for Artist, the model should have the following validations

- all artists must have a name  
- all artists must have a unique name

Create a new model for Song, the model should have the following validations

- all songs must have a title, artist and album
- when a song is created it must be assigned to an artist

> CHECKPOINT: Test your validations by entering the Rails console and attempting to create songs
> and artists with invalid data

## Step 4 - Routing, Controllers and Views

Define your routes and controllers for artists. Define the necessary views for artists.

**Artists Index Page**

- Your homepage should show a list of all artists
- Each artist should have a link which, when clicked, should take the user to the artist's show page. 
- The homepage should also have a link to add a new artist. 

**Artists New Page**

- This page should have a form for creating a new artist.
- The form should submit its data to the `create` route.

**Artists Show Page**

- The show page should the artist's information
- The show page should list all of the artist's songs
- There should be a link to edit the artist that will take the user to the edit page

**Artists Edit Page**

- The edit page should allow the user to update the artists information, through a form that
  submits to the `update` route
- This page should also display a link allowing a user to remove the artist from the database.

---

Define your routes and controllers for songs. Define the necessary views for songs.

**Songs Index Page**

- Your homepage should show a list of all Songs
- Each song should have a link which, when clicked, should take the user to the song's show page. 
- The homepage should also have a link to add a new song. 

**Songs New Page**

- This page should have a form for creating a new song.
- The form should submit its data to the `create` route.

**Songs Show Page**

- The show page should the song's information
- The show page should have a link to the song's artist's `show` page.
- There should be a link to edit the song that will take the user to the edit page

**Songs Edit Page**

- The edit page should allow the user to update the Songs information, through a form that
  submits to the `update` route
- This page should also display a link allowing a user to remove the song from the database.


A user should easily be able to get to the artists index page from any section of the site.

## BONUS

Implement a many to many relationship using songs and playlists.  

#####Playlist Migration

Generate a new migration for playlists. An playlist entry should have:

- name - a String

#####Playlists_Songs migration

- playlist_id - an Integer
- song_id - an Integer

#####Playlist validations

- a playlist should have a name 
<!-- - a playlist should have at least one song -->

#####Playlist routes, views and controllers

Define your routes and controllers for playlists. Define the necessary views for playlists.

**Playlists Index Page**

- Your artists index page should show a link to all of the playlists, and when clicked should take the user to the playlist's index page. 
- When a playlist is clicked from the index page, it should take you to the playlist show page. 
- The playlist index page should also have a link to add a new playlist. 

**Playlists New Page**

- This page should have a form that allows the user to create a new playlist
<!-- - The form should ask the user to pick a song to add to the playlist to start off -->
- The form should submit to the `create` route

**Playlists Show Page**

- The show page should list the name of the playlist and all of the playlists songs
- There should be a link to edit the playlist that will take the user to the edit page
- There should be a drop down menu and an 'Add Song' button to add the selected song from the dropdown menu to the current playlist.

**Playists Edit Page**

- The edit page should allow the user to update the playlists name.
- There should be a link to delete a playlist, which will destroy the playlist from the database
