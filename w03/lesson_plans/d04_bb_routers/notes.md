# Backbone Router

## Learning Objectives

* Explain the role of routes on the internet to preserve state
* Explain the role / purpose of routers in backbone.js apps
* Create a router in a backbone app and use it to manage history and state

## Outline

Give students 'starter' code for twdir. Ask them to take a few minutes
playing with it, and looking for differences between current code and where we
left off yesterday.

Changes:
* Modal
  * Modal div
  * Modal style
  * Modal view
  * Clicking content of tweed reveals modal

**Question**: Does our backbone app have all the functionality we expect? Not just
in terms of features, but fundamental web functionality?

We don't have any way to save where we are in our app!

How do routes work? What is a route? Why are they important?

### Adding a Router

#### I do - create router / initialization / index route

* The router will serve as an organizational tool, and...
* It will allow us to modify the url when we take certain actions to ensure
  that we can go back and forth (generate history of state)

**Demonstrate**:
* creating the basic router
* moving the initialization stuff into the router's initialize function.
* Navigate to /tweeds/:id when a tweed title is clicked
* What have we achieved? The route changes every time we

**You do in pairs**

* Catch up by creating a router
* Navigate back to the root ('') when the modal is closed!

##### Router actions

What is the problem now? While we are using our app, things are dandy, but if we
want to bookmark a URL and visit it freshly, what happens? We want to be able to
define some steps to take if the user is visiting the page FRESH / COLD.

**I do**

* Add routes hash, and root route.
* Add show route for modal stuffs

## Lab - Searching

Add a feature where users can filter the current collection using a text box.

Think about how much we really need to use backbone for this.
