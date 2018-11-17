Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Welcome To Rails

## Learning Objectives

* Explain the function of the following components in a Rails application
  * Router
  * Models
  * Controllers
  * Views
* Draw parallels between the Rails and the Node-Express frameworks
* Explain the MVC structure

## Outline

### Things to Remember

* `Gemfile`
* `rake`
* `bundler`
* `database.yml`
* Router file --> The file has documentation on all the cool things
* `rake routes`
* `app` folder
  * models
  * controllers
  * views - talk about the subfolder structure

### Folder breakdown

* app
  * Your models, views, controllers, assets, etc, live here
  * The real meat of your application
* bin
  * The various commands you have access to come from here
* config
  * Configuration stuff. Relating to different environments, etc.
  * **database.yml**
  * **routes.rb**
* db
  * migrations
  * seed file
  * current schema
* lib
  * Other classes you need
* log
  * logs
* public
  * Very similar to the public folder from before for super static pages
  * 404, 500, etc
* test
  * This is where your tests would live if you used Rails's inbuilt testing suite, minitest
* tmp
  * assets, more on this later
* vendor
  * other people's code
* config.ru
  * Instructions on how to start this app
  * Used by other computers, like Heroku
* Gemfile
  * The gems you need
* Gemfile.lock
  * Bundler handles this, full dependency list
* Rakefile
  * The rake command uses this file to run tasks
* README
  * Blerhp

### Commands

* `rails`
  * Make rails apps
  * Start your server
  * Start up an interactive console
  * Generators
* `bundler`
  * Manages your dependencies for your application
* `rake`
  * Task runner
  * Create/destroy databases
  * Run/undo migrations
  * Print out a list of your app's routes
  * You can create custom rake tasks

### Server-Side Rendering

* Whiteboard the history of servers
* Refer to the middle ground of server-side templating
* Seamless vs Plated!

**With this in mind:**

WHITEBOARD THE MVC STRUCTURE OF A RAILS APPLICATION

### Up Close And Personal

* Skim through model files
* Everyone take a look at the controller files in detail
  * We are catering Seamless and Plated. HTML and JSON.
* Everyone take a look at the views folder. What's in there?
* What is this strange language that we're all talking? ERB! Clown hats.
* Most of the stuff looks ok, but `new` and `edit` are a little scary

**You do**

Set up a route for `GET /` that goes to the `JournalsController`'s `home` action

### Forms

* Look at the form view
* Look at the form html
* Talk about
  * form tag action
  * form tag method

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
