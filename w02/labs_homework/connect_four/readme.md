
# LAB!!!

#### Learning Objectives
- Practice traversing the DOM using jQuery
- Practice selecting and creating DOM elements using jQuery
- Practice adding event listeners to DOM elements
- Gain comfortability working with jQuery
- Practice modeling a real-life problem.
- Reps modeling OOP.
- Build a Great Game!

# Connect Four!!!!! (GO 4 IT!)

![connect four](http://cf.geekdo-images.com/images/pic355666_md.jpg)

# Part 0 - Think about Connect Four.  
Draw upon some lessons we may have learnt this week in building out Tic-Tac-Toe.  Think about how Connect Four is similar to TTT and also how it differs from TTT. Whiteboard ideas!  Do not start coding first!  Work with others! 

# Part 1 - Create your file structure

So far you have received directories with all the components in their necessary subdirectories.  Let's get some reps making this structure our selves.  

In your personal `w02d05` directory:

(Please see TTT Solution as a model for this)

1. Create directory called connectFour.  In connectFour...

1. Create an `index.html` file.

1. Create a subdirectory called javascripts.

1. Create a subdirectory called stylesheets.

1. In javascripts, create a cell.js, board.js, game.js, and app.js (4 .js files total).

1. In stylesheets, create a style.css file.  

1. In index.html, in the head, include a link tag for style.css.

1. In index.html, in the head, include script tags for each .js file.

1. In index.html, in the head, include a script tag for jQuery.   

# Part 2 - Add HTML and CSS to your files

We have provide the body content for your index.html.
We have also provide CSS for your style.css file.

Feel free to use this material for your game. 

However, if you feel that modifying the layout of the html or aspects of the css would help you create your game, feel free to do so.  

Remember that understanding the structure of the HTML and CSS will inform and shape the way your JavaScript works.  

# Part 3 - Cell Object

In cell.js, make a Cell Constructor Function.

Cell Objects will have the following attribute:

`value` - this tracks whether the cell has been played by Player 1, Player 2, or by no one.  It should be initially set to `null`, representing, unplayed.

Cell Objects have the following behaviors:

`isEmpty()` - returns true if the cell has not been played (if value === null).

`getValue()` - returns the cell's value.

`setValue(value)` - changes cell's value to the value passed as a parameter to this function.  

After you write this object.  Test it's functions in the console.  

# Part 4 - Board Object

In board.js, make a Board Constructor.

Board Objects will have the following attributes:

`cells` - will contain seven arrays to represent each column containing an array of six cell objects.  Should be initially set to `null`.

`winner` - will track the winner of a player on a board.  Should be initially set to null.

`currentPlayer` - will track the current player of a board.  Should be initially set to null.

Board Objects will have the following behaviors:

`fillBoard()` - method will fill a board's cells attribute (an array) with 7 arrays representing each column, with each of these arrays containing 6 cell objects.

`play(col)` - method will make a play on the board.  `col` is an argument representing the a column on the gameboard.  It will play in the first cell in a column that is empty.  If a play is sucessfully made, return the row number of the play and also toggle current player (switch between player 1 and 2).  If a column is full, return `-1` and do not toggle current player.

Test your code in the console.  Try all of you methods after making a new board.  Try making plays on columns, checking for wins, etc.  

We will be returning to the Board Object to make functions that check possible winning combos.  

# Part 5 - Game Object

In game.js, make a Game Constructors.

The Game Object will have the following attribute:

`board` - the Board Object.  

Game Objects have the following behaviors:

`startGame()` - method that starts a new game of Connect Four.  This method should create a new board object and create its cells.  It should also set the current player of the board to player 1.  

`play(col)` - method that accepts column as an argument and makes a play on a column on the game's board.

`render()` - method that renders the game's board to the console.

Test your code in the console.  See if `startGame()` correctly starts the game.  See if play makes plays on the board.  Check if render successfully renders the game to the console.  

# Step 6 - Application

In app.js we will write our event listeners and functions to respond to these events.

1. First, create a new Game Object on load.  

2. Create an event listener.  This listener will listen for clicks on column divs.  

3. When the listener is activated, it should
  a. Attempt to make a play on our Game Object.
  b. If the play is successfully made, the cell that was played in should be made red or black to reflect the play. 

NOTE: Your game should only be adding plays to board. It does not yet need to reflect 

# Step 7 - Back to the Board.js (FTW!)

Now we will add logic in our Board to check for a win.  Please go back to board.js and add the following behaviors to Board Object Prototypes.

`checkColumns()` - method will check the board for 4 consecutive cells with the same value IN A COLUMN.  Returns true if there are 4 consecutive pieces of the same value in a column and false otherwise.  Your means of checking this are entirely up to you. 

`checkRows()` - method will check the board for 4 consecutive cells with the same value IN A ROW.  Returns true if there are 4 consecutive pieces of the same value in a row and false otherwise.  Your means of checking this are entirely up to you.  

`checkDiagnols()` - method will check the board for 4 consecutive cells with the same value IN A DIAGNOL.  Returns true if there are 4 consecutive pieces of the same value in a diagnol and false otherwise.  Your means of checking this are entirely up to you. 

`checkAll()` - method will call all check methods.  If any return true, the winner should be set to the winning player.  Else, winner should remain null.  

Please make sure that every time a game move is played, that all the winning possibilities are tried.  If it helps, please check these in one method at a time as you write them. 

NOTE: If you feel as though there are changes to be made to the index.html or style.css, of 'helper' function behaviors in your objects that would your ability to complete this assignment, please make these changes.  So long as you can explain you work/reasoning for changes, it is no problem so long as the game still functions as required.   

## Go 4 IT!
