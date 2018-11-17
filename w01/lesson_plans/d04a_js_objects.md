Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# JS Objects

## Learning Objectives

* Describe what a JS object is
* Differentiate between a JS object and a JS array
* Add, access, edit, and delete properties of an object
* Model a problem domain in an object-oriented fashion
* Create JS objects with attributes and behaviors
* Create JS object factories to DRY up object creation

## Outline

* Personal info example
  * Simple arrays are not good enough!!
* propertyName-propertyValue PAIRS
* The key is the "locator" for each element
* Example of the web (form data)!

* Create a personal info hash
  * name
  * age
  * occupation
  * favoriteFood
* Things to cover in this process
  * Creating a obj
  * Syntax of a obj
  * Adding properties
  * Accessing properties (dot and bracket notation!!)

* We're going to make cars
* index and cars.js
* In cars.js
  * create a car object called `mustang` with the following properties
    * color - red
    * class - muscle
    * horsepower - 435
  * create a car object called `tt` with the following properties
    * color - silver
    * class - sport
    * horsepower - 211
  * create a car object called `gallardo`
    * color - black
    * class - exotic
    * horsepower - 543
* In your console
  * Find out what class car the mustang is (use both notations)
  * Find out how many horsepower the gallardo has (use both notations)
  * Find out what color the tt is
  * Give the gallardo a paint job (make it orange)
  * Give the mustang a suite tune-up. Change its horsepower to 500
  * The TT goes super-saiyan. Change its class to "dbz", and change its
    horsepower to 9001

**What questions do you guys have?!?!?!**

**BREAK**

**I do**

OOP - Problem Modeling Time

* Nouns and verbs, attributes and behaviors
* Oh, I don't know, a PET SHELTER

* pet
  * species
  * name
  * color
  * introduce
* shelter
  * name
  * animals
  * catalog
  * performAdoption()
* owner
  * name
  * address
  * ph no
  * pet
  * returnPet()

**You do in pairs**

* Model an apartment building
* Go crazy
* What are the nouns in this problem domain?
* Be conscious of your attributes vs your behaviors

**I do**

* Let's model cars again
  * color
  * class
  * horsepower
  * fuel
  * drive()
  * brake()

* Suite! We have a car that we can drive around town! In our computer! Yeah!

### THIS

* Let's model cars again
  * color
  * class
  * horsepower
  * fuel
  * drive()
  * refuel()
  * paint()
  * tuneup()

```js
var mustang = {
  prop: 'val',
  behavior: function() {
    console.log(mustang.prop);
  }
}
```

* Seems redundant, doesn't it? How do I say "change MY property"? this!!!
* console.log(this)
* Use that to re-write these methods

**WHAT QUESTIONS DO YOU GUYS HAVE?**

**You do**

* Model a lamp! - `lamp.js`
  * wattage - number
  * on - boolean
  * turnOn() - turn the lamp on
  * turnOff() - turn the lamp off
  * status() - return a string
    * "Lamp is off" if lamp is off
    * "Lamp is shining with X watts of power" if lamp is on

```js
var lamp = {
  wattage: 50,
  on: false,
  turnOn: function() {
    this.on = true;
  },

  turnOff: function() {
    this.on = false;
  },

  status: function() {
    if (this.on) {
      return "Lamp is shining with " + this.wattage + " watts of power"
    } else {
      return "Lamp is off"
    }
  }
};
```

* Model a pokemon! - `pokemon.js`
  * number - number
  * name - string
  * type - string
  * moves - array of strings
  * hp - number starting at 100
  * takeDamage(amount) - reduce hp by amount, to a minimum of 0
  * visitPokeCenter() - restore hp to 100
  * isFainted()
    * return true of hp less than or equal to zero
    * return false if hp is greater than zero

```js
var bulbasaur = {
  number: 1,
  name: "Bulbasaur",
  type: "grass",
  moves: ["tackle", "vine whip", "scratch", "leech seed"],
  hp: 100,
  takeDamage: function(amount) {
    this.hp -= amount;
    if (this.hp < 0) {
      this.hp = 0;
    }
  },

  visitPokeCenter: function() {
    this.hp = 100;
  },

  isFainted: function() {
    return (this.hp <= 0);
  },

  randomMove: function() {
    return this.moves[Math.floor(this.moves.length * Math.random())];
  },

  attack: function() {
    return this.name + " used " + this.randomMove() + "!";
  }
}
```

**Break**

### Object Factory

* Let's make two cars
* What sucks about this?
* How can we DRY up this code?
* Car Factory!

```js
var carFactory = function(color, class, horsepower) {
  return {
    color: color,
    class: class,
    horsepower: horsepower,
    fuel: 5,
    drive: function() {
      if (fuel > 0) {
        fuel--;
        return 'Vroom!';
      } else {
        return 'out of gas';
      }
    },
    refuel: function() {
      fuel = 5;
    },
    paint: function(color) {
      this.color = color;
    },
    tuneup: function() {
      this.horsepower += 10;
    }
  }
};
```

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
