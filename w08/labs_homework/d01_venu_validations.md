# Lab 08-01

## Learning Objectives

- Practice implementing model validations in Sequelize
- Practice setting up models and relationships


WHAMco is starting a new venture! It is time to enter the live music industry! We are going to build

> # VENÜ

![VENU](https://c1.staticflickr.com/7/6006/5933582734_cebf29c6d8.jpg)

> The new app for the music industry to manage its venues, events, and artists!

## Specifications

Build an Express application with a Postgresql Database and Sequelize ORM with
the following models

#### Database

Create a database called `venu_app_development` for this project.

#### Models

##### Venues

| Attributes        | Datatype | Validations |
| ----------        | -------- | ----------- |
| `name`            | string   | must be unique, cannot be null or empty |
| `address`         | text     | cannot be null or empty |
| `city`            | string   | cannot be null or empty |
| `booking_manager` | string   | none |
| `capacity`        | integer  | must be integer, greater than 0 |

##### Events

| Attributes | Datatype | Validations |
| ---------- | -------- | ----------- |
| `name`     | string   | cannot be null or empty |
| `date`     | date     | must be valid date, must be after Jan 1, 1970 |
| `duration` | integer  | must be integer, greater than 0, less than 6 |

##### Artists

| Attributes       | Datatype | Validations |
| ----------       | -------- | ----------- |
| `name`           | string   | must be unique, cannot be null or empty |
| `genre`          | string   | must be one of "Rock", "Pop", "Jazz", "Hiphop", "Metal", "EDM", "Dubstep" |
| `gross_earnings` | integer  | must be integer, greater than 0 |

#### Relationships

* Venues and events have a 1-to-many relationship
  * A venue has many events
  * An event belongs to one venue
* Events and artists have a many-to-many relationship
  * An event has many artists
  * An artist can play at many events

**Make sure to implement the necessary columns and tables in your database to capture these relationships.**

#### Routes

**Venues**

* index route to get all venues
* create route to create a new venue

**Events**

* index route to get all events
* create route to create a new event

**Artists**

* index route to get all artists
* create route to create a new artist

## Completeness

| Value | Target |
| ----- | -------|
| 1-3   | Add 1 point for each model that is set up. Validations may not work |
| 4     | Index and create routes are set up correctly. Validations may not work |  
| 5-7   | Add 1 point of completeness for each model whose validations work |
| 8     | In addition to validations working, semantic error messages are sent back to the client when validation fails, that are displayed to the user |
