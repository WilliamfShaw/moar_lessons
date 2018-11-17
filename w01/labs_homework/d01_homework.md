#Homework 01-01

![homework header image]
(https://physics.ucsd.edu/students/courses/fall2012/physics140a/Calvin_homework.jpg)

Your assignment for tonight is to start getting comfortable with the command line and explore the foundations of Javascript a bit deeper.

Here is a link to the documentation, get comfortable here!!

https://developer.mozilla.org/en-US/docs/Web/JavaScript

##Step 1 - Command Line Navigation

- From the terminal navigate to the `w01/d01/ASSIGNMENT_FILES` folder inside of your class reposiotry.
- Make a copy of the `homework` folder from the `ASSIGNMENT_FILES` folder inside of **YOUR** folder in the repo.
- Once the folder has successfully been copied navigate to **YOUR** folder and open `homework` in your text editor from the command line.
- After you have the files open in your editor move inside of the `homework` folder and open the `index.html` file in chrome from your command line.
>>>>>>> e83f40a35344f04633fdd618ebe603c874799251

##Step 2 - Lets make some Strings!!

- Inside of your `app.js` file lets go ahead and make some new variables with strings as values.

#####After each of the following please log the values in the chrome console

- Make a variable called `firstName` and set it equal to `John`.
- Make a variable called `lastName` and set it equal to `McClane`.
- Make a variable called `villain` and set it equal to `Hans`.
- Lets use the `firstName` variable, `lastName` variable and the `villain` variable to make a new variable. Name the variable `quote`, we want the variable to equal the following quote: `"John McClane: Sorry Hans, wrong guess. Would you like to go for Double Jeopardy where the scores can really change?"`
>>>>>>> e83f40a35344f04633fdd618ebe603c874799251

<!-- are u thinking gsub here? -->
- Using the `quote` variable you just made, switch out `"Hans"` with `"Carl Winslow"` and store this in a new variable of your choice, make sure the variable name is semantic. Use a method to accomplish this.

<!-- Not touching on arrays until tuesday, maybe not the best idea to have them using them -->
<!-- could have them take a string with alot of movie titles, and index into the string the pull out only the text they want? -->
- Again using the `quote` variable. Make a new variable called `words`. Using a method set the value of this variable to an array of the individual words in the `quote`. `["John", "McClane:", "Sorry", "Hans"]` etc.
- McClane really needs to know the position of `"Jeopardy"` inside of `quote`, find out the current starting position using a method. Store this in a variable called `startingPosition`.

##Step 3 - Playing with Numbers

- Inside of your `app.js` file lets make some new variable with numbers as values.

#####After each of the following please log the values in the chrome console

- Make a variable called `favoriteDieHard` set the value of this variable equal to the result of **prompting the user** for the number to their favorite Die Hard movie.
- Now lets take the `favoriteDieHard` variable and add it to `startingPosition`. In a comment write down the result and if it what was you expected, why did it return the way it did?
- Lets find a method that will change `favortieDieHard` into a number that you can then multiply by `10`. Store this value in `dieHardSequel`
- Now take `dieHardSequel` and send a pop up to the user telling them that what their future favortie Die Hard sequel will be. Ex: `"In the future your favorite Die Hard will be 2908"`

##Step 4 - Submit Your Homework

<!-- walk them through the steps and also point them to the resource -->
Follow the provided git resources if you don't know how to do this yet.
