Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Rspec and Rails

## Learning Objectives

* Write rspec tests
* Use rspec to perform unit testing in a Rails app

## Outline

### Lamp

* `gem install rspec`
* set up the following directory structure

```
tested_lamps/
|__ lib/
    |__ lamp.rb
```

* Run the command `rspec --init`
* This would have created a `spec` folder

```
tested_lamps/
|__ lib/
    |__ lamp.rb
|__ spec/
    |__ spec_helper.rb
```

* Create a `lamp_spec.rb` in the `spec` folder

**We do**

Ok, time to write some tests.

### Rspec in Rails

* Copy over the starter Rails folder
* Check out the `rspec-rails` docs and set it up in the Rails app
* Let's test out the methods of our classes!

* Methods
  * Food cart methods
* Validations
  * food cart
    * rating must be present
    * rating must be number
    * rating must be greater than 0
    * cuisine must be in ["Halal", "Hot Dog", "Other"]
  * customer
    * name must be present
    * name must be unique
    * food_love must be an integer
    * food_love must be between 1 and 10
  * owner
    * name must be present
    * name must be unique
    * skill must be present
    * skill must be an integer
    * skill must be between 1 and 5
* Associations
  * food cart belongs to owner
  * food cart has and belongs to many customers
  * owner has many food carts
  * customer has and belongs to many food carts

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
