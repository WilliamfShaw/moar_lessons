#Pokemon Express

![PokeExpress](http://i86.photobucket.com/albums/k120/mannynews/Photo_092506_001.jpg)

Tonight we will be building the Pokemon Express using Node, Express and Sequelize!!

### Learning Objectives

* Create a web server using Node.js
* Utilize a URL parameter to formulate a response to a request
* Utilize a query string to formulate a response to a request
* Create a consumable API using Express

# Step 0

- Please copy todays assignment into YOUR folder for today

# Step 1

- You have been provided with all the module dependencies you will need for this assignment. Run `npm install` from your command line while inside of the starter folder.

# Step 2

- From your command line set up your database `createdb pokemon_app_development`

**BEFORE YOU MOVE FORWARD MAKE SURE YOU HAVE SUCCESSFULLY MADE THE DATABASE using psql**

- From your command line run the migration to set up the tables for your newly created database

**BEFORE YOU MOVE FORWARD MAKE SURE YOUR MIGRATION WAS SUCCESSFUL using psql**

# Step 3

- Now that we have a database set up to store our information we need to seed it with data.
- In the `seed.js` you have been given a function that will `create` a new `Pokemon` in the database for every pokemon in the `pokeArray`. Before running the file take a look at the code inside of it and try to understand how it works.

- From your command line run the `seed.js` file
- Use psql to check that your seed file was successful. You should have entry in your database for each of the first 151 pokemon.

# Step 4

- Now that you have a database full of information to use set up the few routes so you can get your information.
- In your `server.js` file set up the server so it is `listening` for port `3000`. Send a console message that the app is running on the `3000` port.

#### Routes

Test out all of your endpoints through your browser, i.e. if you go to `localhost:3000/pokemons` you should see the JSON returned by that route.

###### `/pokemons`
- this route should use Pokemon to get all of the pokemon from the database
- It should respond with all of the pokemon retrieved by sequelize

###### `/pokemons/:id`
- this route should use Pokemon to get a single pokemon from the database by their `id` number
- It should respond with the pokemon that was retrieved by sequelize

###### `/pokemons/searchByName`
- this route should find a single pokemon using the query parameters sent to the server
- It should respond with the pokemon retrieved by sequelize

###### `/pokemons/searchByType`
- this route should find a single pokemon using the query parameters sent to the server. It should search the database for all pokemon that have the type set in their `classification` column
- It should respond with the pokemon retrieved by sequelize

###### `/pokemons/random`
- this route should retrieve a random pokemon from the database
- it should respond with the pokemon that was retrieved by sequelize

# Step 5

Uncomment this line of code:

```
app.use(express.static('public'));
```

Go to `localhost:3000` and bask in the glory

# Step 6

RELAX. RELATE. RELEASE!