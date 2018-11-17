#### Learning Objectives
* Create a web server using Node.js
* Utilize a URL parameter to formulate a response to a request
* Utilize a query string to formulate a response to a request
* Create a consumable API using Express
* Perform full CRUD Actions upon our database.  

# WHAMsta.grm
### The World's First Photosharing Site!

Tonight, we will be building WHAMsta.grm, a photosharing site where users can upload photos, see photos, edit photos, and delete photos.  

We will be building per the following User Stories:

- As a user I want to be able to view all of the pictures that have been posted because I love kittens and ugly food.
- As a user I want to be able to view a single image so that I can get a close up look at my kittens.
- As a user I want to be able to post a new image so that I can share my kittens with the world.
- As a user I want to be able to delete an image so that I can keep my feed looking awesome.
- As a user I want to be able to edit my image so that I can fix a mistake I made.

## Part 1 - Setup Files

Today, you will be given the necessary front-end assets for our app.  You also will be given a seed file.  You be responsible for writing the back-end for our app.  

1. In your directory for today, create a folder called whamstagram and then enter this folder.
2. Run `npm init` in the command line.
3. Create a `server.js`
4. Create a directory called public.  
5. npm install --save:
	* express
	* morgan
	* bodyparser
	* sequelize
	* pg
	* pg-hstore
6. Sequelize init inside this folder.  
7. Create a public folder.  Please copy all front-end assets into this folder.  

## Part 2 - Database + Seed

1. Create a database called whamstagram_app_development.
2. Change the config.json file to configure our database for this app.  
3. Our database will have 1 table, photos.  It will have 

Please note that our table has one table, photos, with 4 columns:
- id
- poster (user's name)
- caption (text of the photo)
- img_url (url of our image)

Please use this generator to make the Photo model and photos table in our DB:

`sequelize model:create --name [name of your table] --attributes "attr1:datatype, attr2:datatype"`

Please sub in the attributes needed for our model/table name, Photo/photos.  

4. You have been given a seed file in your starter pack.
Include this file in your folder for WHAMstaGRM.
Run the seed to populate our db with some starter photos.  

## Part 3 - Server.js

1. In `server.js` set up our middleware as we did earlier today.  
2. Save our Photo Models to a variable.  
3. Tell our app to use `body-parser` and to get static files from public.  
4. Tell our app to listen to port 3000.
5. Define a root route as we have done over the past two days.  


## Part 4 - READ

- As a user I want to be able to view all of the pictures that have been posted because I love kittens and ugly food.
- As a user I want to be able to view a single image so that I can get a close up look at my kittens.

To accomplish these two tasks, you will need define the following routes in your server.js  

###### GET `/photos`
- this route should use Photo to get all of the photos from the database
- It should respond with all of the photo retrieved by sequelize

###### GET `/photos/:id`
- this route should use Photo to get a single photo from the database by their `id` number
- It should respond with the photo that was retrieved by sequelize

You can test that your server works both by visit the above routes (you will see a JSON response) or actually seeing all photos appear on the homepage AND clicking on the FULL VIEW on a photo.  Also, clicking on the 'WHAMsta.GRM' `<h1>` tag will take us back to a view of all photos.  

## Part 5 - CREATE

- As a user I want to be able to post a new image so that I can share my kittens with the world.

To accomplish this task, you will need to define the following route in your server.js:

###### POST `/photos` 
- this route should first take the content from the body and save it to a variable.
- using the variable Photo and the content, we should create a new object.
- THEN send the new object back in the response.  

You can confirm this works but visiting /photos and seeing if the new photo has been added.

## Part 6 - DESTROY

- As a user I want to be able to delete an image so that I can keep my feed looking awesome.

To accomplish this task, you will need to define the following route in your server.js:

###### DELETE `/photos/:id`
- this route will capture the id from the url params in a variable.
- then we will find a Photo using this id.
- if we find it, destroy the photo
- then send the photo back. 

Please confirm this by destroying a photo and confirming that it is no longer in our app.

## Part 7 - UPDATE

- As a user I want to be able to edit my image so that I can fix a mistake I made.

To accomplish this task, you will need to define the following route in your server.js:

###### PUT `/photos/:id`
- this route will capture the id from the url params in a variable.
- it will also capture the contents of the body in another variable.  
- then we will find a Photo using this id.
- then we will update the found photo, using the contents of the body.
- then send the photo back. 

Again, confirm this by editing a photo in our app and seeing if the changes are reflected.  

