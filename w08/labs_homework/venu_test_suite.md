###TEST SUITE 

![allthings](http://sci8.com/wp-content/uploads/2014/10/test-all-the-things.jpg)

Tonight you will be getting some practice using Mocha and Chai to test your code. 


#### Learning Objectives

- Use Mocha to test a Model object
- Retroactively test our model validations


## Set Up 

* In your folder for today set up a new folder that will have the following components. 
 * package.json
 * car.js
 * baseball.js
 * test (dir)
    * baseball_spec.js
    * car_spec.js

* You will need to `npm install` `chai` and `mocha` 

#### Baseball teams with TDD

You will need to create a baseball team constructor with the following attributes and behaviors.

* Attributes
  * name - ex: "Mets"
  * city - ex: "New York"
  * manager - ex: "Terry Collins"
  * stadium - ex: "Citi Field"
* Behaviors
  * teamName 
    * should return a string with the full name of the team including the city and name in the format: "The New York Mets"
  * playAt 
    * should return a string with the full name of the team and where they play in the format: "The New York Mets play at Citi Field"
  * managedBy
    * should return a string with the full name of the team and who manages them in the format: "The New York Mets are managed by Terry Collins"


#### Cars

You will need to create a car constructor with the following attributes and behaviors.

* Attributes
  * make - ex: "Ford"
  * model - ex: "Mustang"
  * year - ex: 1967
  * topSpeed - ex: 150
  * hp - ex: 314
* Behaviors
  * description
    * should return a string with the full name of the car in the format: "1967 Ford Mustang"
  * getTopSpeed 
    * should return a string with the full name of the car and the top speed in the format: "1967 Ford Mustang tops out at 150 mph"
  * getHp 
    * should return a string with the full name of the car and the hp in the format: "1967 Ford Mustang has 314 HP"
  * isStreetLegal 
    * should return a boolean
      * true if the top speed is less than or equal to 145
      * false otherwise
  * isClassic 
    * should return a boolean
      * true if the car was made before 1980
      * false otherwise

#### VENÜ 0.0.3 - Tested Edition **

* Use the starter code that has been provided for you. * Mocha and Chai have already been included for you in this application. 
* You will only have to run `npm install` to set up this application
* Retroactively write tests for all of the validations that we have placed on our three models, namely Venues, Events, Artists
* Your tests should be written in the following files
  * Venues - `test/venues_spec.js`
    * should have a minimun of 9 tests
  * Events - `test/events_spec.js`
    * should have a minimum of 5 tests
  * Artists - `test/artists_spec.js`
    * should have a minimum of 7 tests

#### Things to Remember

* Make sure to require the model files and node modules you need into your test files



##Completeness

| Value | Target |
| ----- | -------|
| 1   | Baseball team constructor is tested and functional|
| 2    | Car constructor is tested and functional |  
| 3-5   | Add 1 point of completeness for each VENÜ model whose validations are tested |









