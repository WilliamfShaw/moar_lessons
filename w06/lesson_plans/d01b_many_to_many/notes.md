Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Many-to-many Relationships

## Learning Objectives

* Explain how a many-to-many relationship is implemented in a relational database
* Set up a many-to-many association between models using Sequelize

## Outline

**I do**

### The talk

* First, conceptual talk of
  * Domain modeling time
  * m-m

> Enough talk, show me the code  

**You do**

* Copy the starter code over
* `npm install`
* `dropdb bloggr_app_development`
* `createdb bloggr_app_development`
* `sequelize db:migrate`
* `psql -d blogger_app_development`
* Paste the seed data in here and press enter
* Exit psql
* `nodemon`
* Visit `localhost:3000/posts` - You should see an empty array
* Visit `localhost:3000` - Use the console to create 3 posts

**I do**

* Gameplan
  * Create a tags model
  * Create a few tags
  * Create a join table for the posts-tags relationship
  * Associate some tags and posts

**You do**

* Create a `create-tags` migration. Tags should have one attribute - `name`, a string
* Run the migration with `sequelize db:migrate` to create this table in your database
* Create a `tags` model that will interface with this `tags` table

**We do**

* Uncomment routes
* Create some tags

**I do - you do**

* Create a migration for join table, with NO primary key!
* Run migration
* Design and set up two routes
  * `/posts/:id/add_tag`
  * `/posts/:id/remove_tag`

* Make sure to have psql open to show every action as it happens in the join table

### Parting thoughts

* Include tags on posts show and index
* Demo the front end using these routes

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
