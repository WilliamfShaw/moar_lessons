Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Ruby Methods

## Learning Objectives

* Write and call a simple Ruby method
* Write and call a Ruby method that accepts input arguments
* Write and call a Ruby method, making use of the method's return value
* Explain how variable scope works in Ruby wrt methods

## Outline

### Methods

**I do**

Watch me

```rb
require 'pry'

def greeting
  puts 'Well, hello there!'
end

def personalized_greeting(name)
  puts "Well, hello there, #{name}!"
end

def triple_add(num1, num2, num3)
  # This could work
  # return num1 + num2 + num3
  # But implicit returns!
  num1 + num2 + num3
end

binding.pry
```

**You do**

* Create a file called `madness.rb`
* Inside, define the following methods
  * `meaning_of_life` - return the number 42
  * `transmogrifier` - accept 3 numbers as input arguments and returns the
    transmogrified result. The common mathematical operation known as
    transmogrification is when you add the first two numbers and multiply the
    sum by the third number
  * `introduce` - accept two names as strings, and return a string that
    introduces the two people. For example, `introduce("Harry", "Sally")` should
    return the string `"Harry, meet Sally. Sally, meet Harry."`
  * `shout` - accept a string and `puts` the uppercased version of the string.
    For example, `shout("is anybody there")` should display `"IS ANYBODY THERE"`
    on the screen.
  * `titleize` - accept a string and return a version of the string where every
    word is capitalized


**You do**

* Create a file called `calculator.rb`
* Inside, define the following methods
  * `add` - accept two numbers and return their sum
  * `subtract` - accept two numbers and return their difference
  * `multiply` - accept two numbers and return their product
  * `divide` - accept two numbers and return their quotient
    * You can return 0 if the second number is 0
* After you've defined these methods, write out the rest of this app
  * Ask the user what operation they want to perform
  * Ask the user for the first value
  * Ask the user for the second value
  * Use the four methods you defined to calculate the answer
  * Display the answer to the user

```
What operation would you like to perform?
- add
- subtract
- multiply
- divide
> divide
Cool! What is the first number?
> 6
Cool! What is the second number?
> 2
Great. 6 divided by 2 is 3!

Thank you for using this suite calculator. Goodbye.
```

**Break**

### Scope

Two-way mirror

```rb
outside_variable = 12

def some_method
  puts outside_variable
end

def some_other_method
  inside_variable = 24
  puts "I am some other method. I just made a variable in here."
end

some_method
some_other_method

puts inside_variable
```

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
