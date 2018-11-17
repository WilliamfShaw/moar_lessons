#RUBY REPS

![rubypicture](http://skillcrush.com/wp-content/uploads/2012/05/tumblr_m3i4qdmtUS1rr8p66o1_500.jpg)

###Learning Objectives

- Practice modeling a problem domain in an object-oriented way
- Practice defining classes with attributes and behaviors
- Practice debugging using pry

###Step 0

In your folder for today set up a new directory to work in. Inside of this folder set up a `lib` directory and a `main.rb` file. In the `lib` folder make the following files: `car.rb`, `garage.rb`, `person.rb`. Back in your `main.rb` file please `require 'pry'`, `require_relative` for all the files in your `lib` folder. 

###Step 1

Create a `Person` class this class should have the following attributes and behaviors

- Attributes 
  - name: a String
  - age: an Integer
  - eye_color: a String
  - rested: default to true
- Behaviors
 - `name` 
  - should return the name of the `Person`
 - `name=` should accept an argument, a String
  - should set the `name` of the `Person` to a new name
 - `age` 
  - should return the age of the `Person`
 - `age=` should accept an argument, an Integer
  - should set the `age` of the `Person` to a new age
 - `eye_color` 
  - should return the eye color of the `Person`
 - `eye_color=` should accept an argument, a String
  - should set the `eye_color` of the `Person` to a new eye color
 - `introduce` 
  - should return a string introducing your person
 - `sleep`
  - should set the value of `rested` to `true`
 - `code`
  - should set the value of `rested` to `false`     

###Step 2

Create a class `Car` this class should have the following attributes and behaviors
  
- Attributes
  - make: a String
  - model: a String
  - year: an Integer
  - hp: an Integer
  - tricked_out: default to false
- Behaviors
 - `make` 
  - should return the make of the `Car`
 - `make=` should accept an argument, a String
  - should set the `make` of the `Car` to a new make
 - `model` 
  - should return the model of the `Car`
 - `model=` should accept an argument, an String
  - should set the `model` of the `Car` to a new model
 - `year` 
  - should return the year of the `Car`
 - `year=` should accept an argument, a String
  - should set the `year` of the `Car` to a new year
 - `hp` 
  - should return the year of the `Car` 
 - `hp=` should accept an argument, a String
  - should set the `hp` of the `Car` to a new hp
 - `info` 
  - should return a string with the cars info
 - `upgrade`
  - should set the value of `tricked_out` to `true`
     
###Step 3

Create a class `Garage` this class should have the following attributes and behaviors

- Attributes
  - name: A String
  - cars: an Array
- Behaviors
 - `owner`
  - should return the `owner` of the garage
 - `owner=` accepts an argument, a `Person` object
  - should set an owner attribute for the `Garage` to the person object that is passed in
 - `add_car` accepts an argument, a `Car` object
  - should add the new car object to the cars array
 - `roster`
  - should return a string with all the cars in your cars array
 - `recommend` 
  - should return a string that greets the owner by name and contains the `info` of a random car from your cars array  ex: "Hello Will, you should drive your 1900 Toyota Prius today!!" (aka horse and buggy)

####Pivot
###Step 4

####Make a new file called `get_squares.rb`

Write a method `get_squares` that takes an argument, an array of numbers. This method will return a new
array of numbers that qualify as perfect squares from the input array. A perfect
square is defined as a whole number that, when square rooted, is a whole
number. (Such as 1, 4, 9, 16, etc, etc.)

####Note: Return only one copy of each perfect square in ascending order

```rb

get_squares((1..16)) #=> [1, 4, 9, 16]
get_squares((1..100)) #=> [1,4,9,16,25,36,49,64,81,100]
get_squares([4,1,16,1,10,35,22]) #=> [1,4,16]

```





















