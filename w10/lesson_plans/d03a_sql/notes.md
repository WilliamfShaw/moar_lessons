Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# SQL

## Learning Objectives

* SELECT
  * WHERE
  * LIKE
  * ORDER BY
* INSERT
* UPDATE
* DELETE
* JOIN
  * FULL OUTER JOIN
  * LEFT OUTER JOIN
  * INNER JOIN

## Outline

First we gotta get our database set up. Let's set up our schema!

* users
  * id PK
  * name varchar255
  * age int
  * favorite_food varchar255
* posts
  * id PK
  * title varchar255
  * content text
  * user_id int
* tags
  * id PK
  * name varchar255
* posts_tags
  * post_id int
  * tag_id int

### SELECT

**I do**

`SELECT field, field, field (*) FROM table_name WHERE condition`

**You do**

* Find the users who like purple
* Find the users younger than 30
* Find the users whose name is Eric
* Find all the users ordered by favorite food
* Find all the users in descending order of age
* Find out how many users like each favorite_food

### INSERT

**I do**

`INSERT INTO table_name (field, field) VALUES (value, value)`

**Make a post that belongs to a user**

**You do**

* Create 3 new posts - Make sure to attribute them to a particular user
* Create 2 new tags

### UPDATE

**I do**

`UPDATE table_name SET field = value WHERE condition`

**You do**

* Change the favorite food of those who like purple to 'burgundy'
* Change the favorite food of those above 49 years of age to 'gray'
* Change Hari's name to Harold
* Change McK's name to McKinnon

### DELETE

**I do**

`DELETE FROM table_name WHERE condition`

**You do**

* Create 2 new users
* Delete the 2 new users one by one
  * Delete the first user by id
  * Delete the second user by name

**BREAK**

Whiteboard user account vs profiles example. Join the two tables on the board.

* Do the three joins between users and posts
* Talk about different situations - discuss the inefficient and efficient ways
  to do these
  * `User.findAll({ include: Post })`
  * `User.findOne({ where: { id: 2 }, include: Post})`
  * Post to user

> HERE IS THE KICKER

posts and tags

Find all posts with associated tags
Find the tags associated with a single post
DOUBLE JOINS OH MY GOD

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
