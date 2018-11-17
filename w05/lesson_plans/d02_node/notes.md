Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Node

## Learning Objectives

* Create a web server using Node.js
* Utilize a URL parameter to formulate a response to a request
* Utilize a query string to formulate a response to a request
* Create a consumable API using Express

## Outline

Draw the diamond
Draw the computer

* Node is a platform for writing programs
* Yesterday, we used node to interact with a database
* Today we will use node to open up our computer to the world (create a web server)
* We will also put these two things together to create our first API

Let's do it together!

**You do**

* Create a folder called `jokes_app`.
* Inside this folder, run `npm init` and follow the instructions to set up a node application
* Let's use express to set up this app, so `npm install --save express`
* Create a file called `server.js`
* Finally, follow the Hello World instructions
* Run your program with `node server.js`
* Visit `localhost:3000` in your web browser

**I do**

* What just happened? White board the HTTP request from browser to server and back

**You do**

* Make some more routes
  * `GET /about` - Should return a brief message about this application
  * `GET /bananas` - Should return the string "All dem bananas!"
  * `GET /joke` - Should return a joke!

**I do**

* Make a custom route for `GET /:name` to say hello to someone
* **GOTCHA** Make sure that the wildcard route comes AFTER the others

**You do**

* `GET /joke/:name` - Should return a personalized joke

**BREAK**

URL params stuff

**You do**

* Make a new express app called `calculator_app`
* Set up the root route to return the string "Welcome to the calculator"

**I do**

* `GET /add?x=1&y=2`

**You do**

* `GET /subtract?x=1&y=2`
* `GET /multiply?x=1&y=2`
* `GET /divide?x=1&y=2`

---

### Middleware

* Add a logger
* Talk about middleware
* Draw a picture of middleware

### Sequelize Time

**You do**

* Create a brand new app called `bloggr_app`
  * `npm init`
  * Install `express` in the project
  * Install `pg` in the project
  * Install `pg-hstore` in the project
  * Install `sequelize` in the project
* Let's create a user model!
* Database setup
  * In terminal, use the `createdb` command to create `bloggr_app_development`
  * `sequelize` - to check whether sequelize-cli is installed properly
  * `sequelize init` - to create the necessary folders and files
  * `config/config.json` - update the database names and dialects
* User setup
  * `sequelize model:create --name users --attributes "name:string age:integer favorite_food:string"`
  * Remove the timestamp related fields

**I do**

* I give you a seed script
* You run the seed script
* We're good to go

**BREAK**

**I do - you do**

Index route
Show route
Search route

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
