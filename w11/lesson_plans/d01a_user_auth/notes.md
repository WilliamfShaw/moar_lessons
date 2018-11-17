Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# User Authentication in Rails

## Learning Objectives

* Implement user authentication in a Rails application

## Outline

### Bcrypt

**You do**

* Create a new rails app called user_auth_app
  * Remember to use `postgres`
  * Go ahead and add `pry-rails` to your Gemfile and `bundle install`
* Create a migration for `users` with the following attributes
  * `username` - string
  * `password_digest` - string
* Create a `User` model
* Visit your `Gemfile`, uncomment the `bcrypt` gem
* `bundle install`

**I do**

* Talk about `has_secure_password`
* `password_digest` will get filled automatically!
* Create some users in the console for demonstration
  * password
  * password and password_confirmation correct
  * password and password_confirmation wrong
* Routes for users index, new, and create

**You do**

* Set up a Users controller with actions for index, new, and create
* Fill in the contents of the index action
* Create a view file for the index action (I will give you the code for inside the view)
* Fill in the contents of the new action
* Create a view file for the new action (I will give you the code for inside the view)

**BREAK**

### Login

* binding.pry to show people the session object
* Think about what routes we setup before

Here's the gameplan.

```ruby
get  '/sessions/new' => 'sessions#new'     # => Login form
post '/sessions'     => 'sessions#create'  # => Authenticate the user
delete  '/sessions'  => 'sessions#destroy' # => Log the user off
```

**You do**

* Pair up and implement the routes necessary.
* Create the sessions controller and define new, create, and destroy actions
* Create the `new.html.erb` for the Log in form, we will write code inside this
  file together

**Checkpoint**

**I do - You do**

* Code for the create action
* Code for the destroy action
* Implement login and logout links based on whether a user is logged in or not

**BREAK**

**You do**

Set up the `entries` entity

**Attributes**

* `title` - string, must be present
* `content` - text, must be present
* `timestamps`
* entries should belong to a user

* Create a migration
* Run your migration
* Create a model
* Set up the necessary ActiveRecord associations
* Set up a controller and views to handle index, show, new, create actions

**Checkpoint**

So we don't have a user drop down when we create new entries! We just look at
who the currently logged in user is!

**I do**

What was the problem? What if nobody's logged in? Should we even have access to
the entries new page? Implement authenticate method!

What about create?!

**BREAK**

**You do in pairs**

Think about what you would do to ensure security on the show page. I should not
be able to view anyone else's posts.

---

Wrap up with controlling the index action
