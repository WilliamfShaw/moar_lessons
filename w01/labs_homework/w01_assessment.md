#Week 1 Assessment

Please work alone. Please use tools such as the Chrome Console, to test writing your code. 

The answers to these questions will always be short bits of javascript code. We are not looking for any english in your answers.

Please submit your work in a gist file (as we have with HW this week) and email your work to `will.shaw@ga.co` & `tony.defreitas@ga.co`.

## Problem 1

How do I get the string "dog" using the variable pets

`pets = ["iguana", "hamster", "dog"]`
## Problem 2

How do I get the string `"snails"` using the variable `coolThings`

`coolThings = { tony: "t-shirts",
                mck:  "nike boots",
                sarah: "snails"}`
## Problem 3

How do I get the string `"Clinton"` using the variable `knowledge`

`knowledge = {presidents: ["Clinton",
                             "Roosevelt",
                             "Bush1",
                             "Lincoln"],
             states:   ["Nebraska",
                         "Hawaii"]}`
## Problem 4

Using the `variable userName`, create a variable `greeting` that holds a greeting message. So for example.

`userName = "Big Steve"`

after your code, the variable `greeting` should equal

`"Big Steve, welcome to the party."`
## Problem 5

Using the variables `bankBalance` and `itemPrice`, create an if-statement that logs `"you can buy it"` to the console if `bankBalance` is greater than or equals to `itemPrice`.

`bank_balance = 200`
`item_price = 30`
##Problem 6

Using the variables `numberOfPeople` and `numberOfSpots` in car create if-else if-else-statement that logs one of the following things to the console.

"there are more people than cars" if numberOfPeople is greater than numberOfCars
"there are fewer people than cars" if numberOfPeople is less than numberOfCars
"there are the same number of cars as people" if numberOfPeople equals numberOfCars
numberOfPeople = 3
numberOfCars = 10
## Problem 7

Write a function called `adds7` that takes one parameter called aNumber. Your method will return the number passed in but incremented by 7. Here are some sample calls of the method you are to write.

```
adds7(4)
//returns 11
adds7(10)
//returns 17
```
## Problem 8

Write a function called greetsTwo that takes two arguments called name1 and name2 which will both be strings. Your method should return a string saying hello to both names. Here are some sample calls of the method you are to write.
```
greetsTwo("Sarah", "Mike");
//returns "Hello Sarah. Hello Mike."
greetsTwo("Hans", "The Dude");
//returns "Hello Hans. Hello The Dude."
```
## Problem 9

Write a function called greaterThan that takes two arguments number1 and number2. The return value will depend on a condition.

return `number1` if it is greater `number2`
return `number2` if it is greater `number1`
return "the same!" of `number1` and `number2` are equal
## Problem 10

Write a function called capitalizer that takes a single argument, a string, and returns the string with each word capitalized.

theRock = "dwayne";
capitalizer(theRock) = "Dwayne";

## Problem 11
Create an object literal called `bicycle`.  It should have the following properties:

#### Attributes

`make`: the make of the bike (something like Schwinn, Mongoose, etc.)

`color`: the color of the bike.

#### Behaviors

`paintRed`():  changes the color of the bike to red.

## Problem 12
### Part A)
Write a function called `dogFactory`.  dogFactory should take two arguments, a dog name (string) and a breed (string).  This function should return `dog` objects with the following attributes and behavior:

#### Attributes

`name`: the dog's name

`breed`: the dog's breed

#### Behavior

`arfer()`: a function that logs 'arf' to the console.
### Part B)
create a dog object with dogFactory and call it's attributes and behavior.

## Problem 13

Write a function called saysWill.  saysWill takes two arguments, an input and and a function.  saysWill should return the result of calling that function argument with the input argument, but with " says Will."
```
saysWill(capitalizer, "dwayne")
# returns "Dwayne says Will."
```

