Lab 01-05

# Tic Tac Toe - Three in a row!!

![tictactoe](http://screenshots.en.sftcdn.net/en/scrn/3353000/3353302/scr_0-700x509.png)

The game that you design should have the following objects:

- A board -> made with a object literal
- A game -> made with an object literal

#### PRO-TIP
This is an excellent opportunity to plan and breakdown a problem first on paper (or your desk) and understand its components before tackling the code. Work with a partner, play some TicTacToe on paper and talk about how it actually works.

So far we've used:
- `strings`
- `numbers`
- `arrays`
- `objects`
- `functions`
- `booleans`
- `control flow structures`

Think about which of these tools you are going to need to build this game. What are the pros/cons of each of these tools? What are the attributes of these tools that you can exploit to help model this real world game in a way that your computer can understand?

_To guide your way_

Write out an algorithm based on how you play TicTacToe with a pen and paper.

- What is Tic Tac Toe? How is it played?
- What does it look like?
- How can you represent this programmatically?

For a board:

- What are the attributes of the board?
- What are the behaviors of the board?
- How can you determine if a play is a winning play?

For a game:

- What should the game do?
- What is the purposed of having the game object?
- What are the functions of the game object?

# Board Object

These are the attributes that a board object should have:

- cells -> set to `null`
- moves -> set to `null`
- a winner -> `null`

These are the functions that a board object should have:

- `startGame`
	- should set the board's cells property to an array with a length of 9
	- should set the winner to `null`
	- should set moves to 0
- `canBePlayed`
	- should accept a cell location as an argument
	- should make sure that only cell locations between 0 and 8 are allowed
	- should return a boolean indicating whether the cell is playable or not
- `makePlay`
	- should accept a cell location as an argument and set the value of that cell based on the current move.
		- If a move is even -> `X`
		- If a move is odd -> `O`
	- should do nothing if the cell has already been played on OR if there is no cell at that position
		- make use of the `canBePlayed` function
- `hasWinningRow`
	- should check the status of the rows to see if there is a winner
	- if a winner was found it should set the board's winner equal to the winning player
	- should return a boolean based on whether a winner was found or not
- `hasWinningColumn`
	- should check the status of the columns to see if there is a winner
	- if a winner was found it should set the board's winner equal to the winning player
	- should return a boolean based on whether a winner was found or not
- `hasWinningDiagonal`
	- should check the diagonals to see if a winner was found
	- if a winner was found it should set the board's winner equal to the winning player
	- should return a boolean based on whether a winner was found or not
- `checkWin`
	- should check the game board to see if the previous play was a winning play
	- should make use of `hasWinningRow`, `hasWinningColumn`, and `hasWinningDiagonal`
	- should log that a winner was found and who won
- `render`
	- should return the current state of the game board

# Game Object

These are the functions of the game object:

- `start`
	- should start the game by calling the startGame function of the board object
	- should render the current state of the board and display it in the console
	- should call the play function of the game object as the last step
- `play`
	- as long as there is no winner the game should continue prompting the user to choose a square to play
	- should render and display in the console the current state of the board after each move
	- after a game has ended should ask the user if they would like to play again or quit
