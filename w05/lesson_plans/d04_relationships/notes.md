Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Model Relationships

## Learning Objectives

* Explain what a one-to-many relationship is
* Explain how a one-to-many relationship is implemented in a relational database
* Set up a one-to-many relationship with Sequelize
* Set up CRUD routes for a "many" model of a one-to-many relationship

## Outline

**I do**

### The talk

* First, conceptual talk of
  * Domain modeling time
  * 1-1, 1-m, m-m

**You do in pairs**

* Come up with 3 examples of each relationship
* Regroup and discuss
* How are these relationships implemented in relational databases?
  * Store all author information in a single books table?
  * Brainstorm!
* Regroup, talk about different theories
  * Array of book ids in authors table
  * Author id in books table

* Awesome!

### Enough talk, show me the code

**You do**

* Copy the starter code over
* `npm install`
* `sequelize db:migrate`
* `node db/channel_seed.js`
* `nodemon`
* Visit `localhost:3000`
* Visit `localhost:3000/channels`

**I do**

* Talk about what a migration file is
* Create a migration file
* Fill out the contents, you just watch
* Literally use the old one for reference
* I run the migration, and show everyone that the table has been created

**You do**

* Go ahead, set up the migration

**BREAK**

**I do - You do**

* Set up the model file without associations
* Set up index and create routes!
* Create a few comments for some channels!
* Modify the channel show response to include comments (manually)
* Set up associations to take advantage of
  * channel show route
  * channel index route
  * comment creation

* Drop in the front end

**BREAK**

BLOGGR LAB

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
