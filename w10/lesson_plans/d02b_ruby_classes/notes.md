Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Ruby Classes

## Learning Objectives

* Write a class with an initialize method
* Write methods to define an interface to the class's behaviors
* Instantiate an object from a class and interact with it
* Write setters and getters
* Explain the use of self in Ruby
* Explain the difference between local, instance and class variables

## Outline

**I do - you do**

```ruby
require 'pry'

class Lamp
end

binding.pry

# l = Lamp.new
# l.to_s
# l.nil?
```

```ruby
require 'pry'

class Lamp

  def initialize
    puts "Lamp created!"
  end

  def who_am_i
    "I am a lamp! I came from the `Lamp` class."
  end

end

binding.pry

# l = Lamp.new
# l.who_am_i
```

Let's add some attributes.

```ruby
require 'pry'

class Lamp

  def initialize
    @on = false
  end

  def who_am_i
    "I am a lamp! I came from the `Lamp` class."
  end

end

binding.pry

# l = Lamp.new
# l.on
```

Wait. Can we get to it? We can't get to it! HOW DO WE GET TO IT?! WHAAAA?!?!?!

```ruby
require 'pry'

class Lamp

  def initialize
    @on = false
  end

  def who_am_i
    "I am a lamp! I came from the `Lamp` class."
  end

  def status
    @on
  end

  def switch
    @on = !@on
  end

end

binding.pry

# l = Lamp.new
# l.on
```

Let's add a wattage property as well.
Let's add a way to get our wattage.
Let's add a way to set a custom wattage when we start!
Let's add a way to change our wattage.

### Getters and Setters

Let's write some common things

* Create a file called `computer.rb`
* Inside, create a `Computer` class
  * Attributes
    * `@company` - string
    * `@model` -string
    * `@color` - string
  * Methods
    * `initialize` - accepts three input arguments for company, model, and color
      and creates the necessary instance variables
    * `get_company` - returns the company
    * `get_model` - returns the model
    * `get_color` - returns the color
    * `set_company` - accepts and argument, sets the company to the value of the argument
    * `set_model` - accepts and argument, sets the model to the value of the argument
    * `set_color` - accepts and argument, sets the color to the value of the argument
    * `info` - returns a string with info about the computer based on its attributes

```ruby
class Computer

  def initialize(company, model, color)
    @company = company
    @model = model
    @color = color
  end

  def company
    @company
  end

  def model
    @model
  end

  def color
    @color
  end

  def company=(newCompany)
    @company = newCompany
  end

  def model=(newModel)
    @model = newModel
  end

  def color=(newColor)
    @color = newColor
  end

  def info
    [
      "Company : #{company}",
      "Model   : #{model}",
      "Color   : #{color}"
    ].join("\n")
  end

end
```

**CHECKPOINT**

What questions do you guys have?

Let's talk about a convention for "setter" methods that is totally suite!

`object.something = "Hello"` is actually `object.something=("Hello")`

Let that sink in for a second.

**You do**

# DO NOT FORGET TO CREATE A MAIN.RB AND TALK ABOUT REQUIRE

#### Student

Using common getter and setter conventions, set up a `Student` class, in `student.rb`

* Attributes
  * `@name`
  * `@age`
  * `@favorite_tech`
* Methods
  * `initialize` method that accepts three arguments and creates the required
    instance variables
  * Getter and Setter methods for these three attributes

#### Video Game

Using common getter and setter conventions, set up a `VideoGame` class, in `video_game.rb`

* Attributes
  * `@name`
  * `@publisher`
  * `@price`
  * `@awesomeness`
* Methods
  * `initialize` method that accepts four arguments and creates the required
    instance variables
  * Getter and Setter methods for these four attributes

#### Coffee Mug

Set up a `CoffeeMug` class, in `coffee_mug.rb`

* Attributes
  * `@color`
  * `@level` - a number that starts at 0
* Methods
  * `initialize` method that accepts one argument and creates the required
    instance variables
  * Getter and Setter methods for color
  * Getter method for level
  * `drink` - reduce the level by 1. do not reduce below 0
  * `refill` - set the level to 10

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
