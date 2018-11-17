Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Testing Servers

## Learning Objectives

* Set up mocha in an Express application
  * Configure and use a test database
  * Start and stop the server
* Test the endpoints of an Express application
  * Status codes
  * Response types

## Outline

* Copy over the starter app
* `npm install`
* `npm install` mocha and chai

```
ga_tested_app
|__ test
    |__ routers
    |  |__ campus_router_spec.js
    |
    |__helper.js
```

**I do**

What is helper? It is nothing special. BUT by virtue of being on the top level,
it will be executed first. Hence, we can put a bunch of setter-upper stuff in
here. Namely:

* Set the environment to `test`,
* Start the server and stop it afterwards
* Seed the test database each time

#### Things to do

* test database, create it
* turn off logging
* make test folder and courses spec
* tell our test suite to start server and stop
* tell our test suite to seed every time
* we test status, and data type

#### Collection GETs

**Campuses**

* `/campuses`
* `/campuses/headquarters`
* `/campuses/active`
* `/campuses/large`

**Courses**

* `/courses`
* `/courses/empty`

**Students**

* `/students`

#### Member GETs

**Campuses**

* `/campuses/:id`

**Courses**

* `/courses/:id`
* `/courses/:id/hours`

**Students**

* `/students/:id`
* `/students/:id/full_name`

#### POST routes

* `/campuses`
* `/courses`
* `/students`

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
