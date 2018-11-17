Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# AJAX Reps

## Learning Objectives

* Practice with AJAX requests
* Utilize remote data in an application
* Practice with DOM manipulation
* Practice with Handlebars templates

## Outline

**You do**

* Copy the starter code and peruse it
* Pay attention to the
  * divs
  * templates
  * .js file

**We do**

So what is the goal of this application based on what you found? Ok great!

**You do**

* Doc dive into `http://pokeapi.co`
* Read the "Pokedex" section of the docs
* Try entering the URL of the Pokedex endpoint into your browser URL bar and
  look at the results

**We do**

* Look at the pokedex response
* Identify the attributes that are important to us
* Draw the structure of the response that we are getting, and whiteboard how
  to get to our information
* Set up our first AJAX request and set up a debugger inside to play around

---

* Appending time. Append just the name of each pokémon into the `#menu`
* Append an `li` tag into `#menu`
* Utilize the template! HOLY CRAP WHAT JUST HAPPENED

---

Now, when we click each pokémon on the left, I want to see the pokémon deets in
the window on the right. What do we need for this?

* `resource_uri`!
* Stick it into the DOM!
* Add a click event listener in `onload` so that when a pokémon is clicked, we
  `console.log` the `resource_uri`

**BREAK**

**You do**

* Ok, read the `pokemon` section of the docs.
  * How do we use it?
  * What information comes back?
  * What information do we need?

**I do**

* Ok, here we are. Time to write a `getOnePokemon` function
  * Make an AJAX request in here, and stick a debugger inside done
  * Instead of debugger, append the name and pkdx id of the pokemon in `#detail`
  * Now use the template to put lots of things inside!

**RECAP**

What have we just achieved?! Greatness! Someone makes data available to us, and
we can construct any application to make use of this data in any way!!

**BREAK**

**You do in pairs**

* As a user, when I click the red button in the top left, I want to see a list
  of all the moves, so I can see lots of pokemon moves at a glance
* As a user, when I click a move, I want to see its details in the right window,
  so I can learn more about the moves I like

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
