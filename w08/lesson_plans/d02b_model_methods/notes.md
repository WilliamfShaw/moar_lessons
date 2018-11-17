Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Model Methods

## Learning Objectives

#### Instance Methods

**I do**

Talk about how we have too much logic in our routers, and that this logic has a
better place to live, namely the models!

But first, what are instance vs class methods?

**You do in pairs**

Go through one of our routers, and identify the instance vs class methods that
we are using on our models.

**Checkpoint**

**I do then you do**

* Instance method - `#fullName()` on `Student`
* Goal: Put the first name and last name together to make a full name, and send
  it back to the server
* Need a route to test it out - `GET /students/:id/full_name`

**You do**

* Instance method - `#hours()` on `Course`
* Goal: Return the total number of hours for a course
  * Immersive courses are 40 hours a week
  * Part-Time courses are 6 hours a week
* Need a route to test it out - `GET /courses/:id/hours`

**BREAK**

#### Promises and Callbacks

**I do**

* Deep dive into analysis of `findAll` returning a promise object that has a
  `.then` method on it

#### Class Methods

* Class method - `.findHeadquarters()` on `Campus`
* Goal: Return the campuses in New York City
* Need a route to test it out - `GET /campuses/headquarters`

* Class method - `.findActive()` on `Campus`
* Goal: Return the campuses that are active
* Need a route to test it out - `GET /campuses/active`

* Class method - `.findLargeCampuses()` on `Campus`
* Goal: Return the campuses with capacity greater than 200
* Need a route to test it out - `GET /campuses/large`
* [Sequelize docs](http://docs.sequelizejs.com/en/latest/api/model/#findalloptions-queryoptions-promisearrayinstance)

**We do together**

* Class method - `.findEmptyCourses()` on `Course`
* Goal: Return the courses with no students in them
* Need a route to test it out - `GET /courses/empty`

## Outline

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
