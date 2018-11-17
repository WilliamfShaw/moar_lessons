describe("Is this working", function() {
	it("should work", function() {
		expect(true).toEqual(true);
	});
});

describe("Board", function() {

// Cells
	it("should have cells", function() {
		expect(board.cells).toBeDefined();
	});

// Moves
	it("should have moves", function() {
		expect(board.moves).toBeDefined();
	});

// Winner
	it("should have a winner", function() {
		expect(board.winner).toBeDefined();
	});

// startGame
	describe("startGame", function() {
		beforeEach(function() {
			board.startGame();
		});
		it("should set the games cells", function() {
			expect(board.cells.length).toEqual(9)
		});
		it("should set the game's winner", function() {
			expect(board.winner).toBe(null);
		});
		it("should set the number of moves", function() {
			expect(board.moves).toBe(0);
		});
	});

// canBePlayed
	describe("canBePlayed", function() {
		beforeEach(function() {
			board.startGame();
		});
		it("should be playable if the cell has no value", function() {
			expect(board.canBePlayed(0)).toBe(true)
		});
		it("should not be playable if the cell has a value", function() {
			board.cells[0] = 'X';
			expect(board.canBePlayed(0)).toBe(false)
		});
		it("should be playable if the cell is within the bounds of the board", function() {
			boardCells = [
				board.makePlay(0),
				board.makePlay(1),
				board.makePlay(2),
				board.makePlay(3),
				board.makePlay(4),
				board.makePlay(5),
				board.makePlay(6),
				board.makePlay(7),
				board.makePlay(8)
			];

			for (var i = 0, len = boardCells.length; i < len; i++){
				expect(boardCells[i]).toBe(true);
			}
		});
		it("should not be playable if the cell is outside the bounds of the board", function() {
			boardCells = [
				board.makePlay(10),
				board.makePlay(123),
				board.makePlay(2343),
				board.makePlay(-13),
				board.makePlay(24),
				board.makePlay(-12315),
				board.makePlay(09),
				board.makePlay(12),
				board.makePlay(12)
			];

			for (var i = 0, len = boardCells.length; i < len; i++){
				expect(boardCells[i]).toBe(false);
			}
		});
	});

// makePlay
	describe("makePlay", function() {
		beforeEach(function() {
			board = board;
			board.startGame()
		});
		it("should make a play if the cell is playable", function() {
			expect(board.makePlay(0)).toBe(true);
		});

		it("should not make a play if the cell is not playable", function() {
			board.cells[0] = 'X';
			expect(board.makePlay(0)).toBe(false)
		});

		it("should change the current game move", function() {
			board.makePlay(0);
			expect(board.moves).toEqual(1);
		});

		it("should not change the current move is a play is invalid", function() {
			board.makePlay(0);
			board.makePlay(0);
			expect(board.moves).toEqual(1);
		});

		it("should set the cell's value to X if the move is even", function() {
			board.makePlay(0);
			expect(board.cells[0]).toEqual('X');
		});

		it("should set the cell's value to O if the move is odd", function() {
			board.makePlay(0);
			board.makePlay(1);
			expect(board.cells[1]).toEqual('O');
		});
	});

// hasWinningRow
	describe("hasWinningRow", function() {
		beforeEach(function() {
			board = board;
			board.startGame();
			board.makePlay(0);
			board.makePlay(3);
			board.makePlay(1);
			board.makePlay(4);
		});

		it("finds a winner if there are three matching plays in a row", function() {
			board.makePlay(2);
			expect(board.hasWinningRow()).toEqual(true);
		});

		it("doesn't find a winner if there are not three matching plays", function() {
			board.makePlay(5);
			expect(board.hasWinningRow()).toEqual(false);
		});

		it("sets a winner if one is found", function() {
			board.makePlay(2);
			board.hasWinningRow();
			expect(board.winner).toBe('X');
		});

		it("does not set a winner if none is found", function() {
			board.makePlay(5);
			board.hasWinningRow();
			expect(board.winner).toBe(null)
		});
	});

// hasWinningColumn
	describe("hasWinningColumn", function() {
		beforeEach(function() {
			board = board;
			board.startGame();
			board.makePlay(0);
			board.makePlay(1);
			board.makePlay(3);
			board.makePlay(2);
		});

		it("finds a winner if there are three matching plays in a column", function() {
			board.makePlay(6);
			expect(board.hasWinningColumn()).toEqual(true);
		});

		it("doesn't find a winner if there are not three matching plays", function() {
			board.makePlay(5);
			expect(board.hasWinningColumn()).toEqual(false);
		});

		it("sets a winner if one is found", function() {
			board.makePlay(6);
			board.hasWinningColumn();
			expect(board.winner).toBe('X');
		});

		it("does not set a winner if none is found", function() {
			board.makePlay(5);
			board.hasWinningColumn();
			expect(board.winner).toBe(null)
		});
	});

// hasWinningDiagonal
	describe("hasWinningDiagonal", function() {
		beforeEach(function() {
			board = board;
			board.startGame();
			board.makePlay(0);
			board.makePlay(1);
			board.makePlay(4);
			board.makePlay(2);
		});

		it("finds a winner if there are three matching plays in a diagonal", function() {
			board.makePlay(8);
			expect(board.hasWinningDiagonal()).toEqual(true);
		});

		it("doesn't find a winner if there are not three matching plays", function() {
			board.makePlay(5);
			expect(board.hasWinningDiagonal()).toEqual(false);
		});

		it("sets a winner if one is found", function() {
			board.makePlay(8);
			board.hasWinningDiagonal();
			expect(board.winner).toBe('X');
		});

		it("does not set a winner if none is found", function() {
			board.makePlay(5);
			board.hasWinningDiagonal();
			expect(board.winner).toBe(null)
		});
	});

// render
	describe("render", function() {
		beforeEach(function() {
			board = board;
			board.startGame();
			board.makePlay(0);
			board.makePlay(3);
		});

		it("should display the current state of the gameboard", function() {
			expect(board.render()).toEqual(
				[
					'____________',
					'| T | I | C |',
					'| T | A | C |',
					'| T | O | E |',
					'_____________',
					'| X | _ | _ |',
					'| O | _ | _ |',
					'| _ | _ | _ |',
					'_____________'
				].join('\n')
				)
		});
	});
});