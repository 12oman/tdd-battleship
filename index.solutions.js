// rename this file to index.test.js to run these tests and see how it should work
('Battleship Game', () => {
    describe('Game Board', () => {
      const { GameBoard } = require('./battleship');
  
      test('creating an empty game board', () => {
        const gameBoard = new GameBoard();
        expect(gameBoard.board).toEqual(Array(100).fill(null));
      });
  
      test('placing a ship on the board', () => {
        const gameBoard = new GameBoard();
        gameBoard.placeShip(0, 3, 'horizontal');
        expect(gameBoard.board.slice(0, 4)).toEqual([null, 'ship', 'ship', 'ship']);
      });
  
      test('placing a ship that goes off the board', () => {
        const gameBoard = new GameBoard();
        expect(() => gameBoard.placeShip(98, 3, 'horizontal')).toThrowError('Ship cannot be placed off the board');
      });
  
      test('placing a ship that overlaps with another ship', () => {
        const gameBoard = new GameBoard();
        gameBoard.placeShip(0, 3, 'horizontal');
        expect(() => gameBoard.placeShip(1, 3, 'horizontal')).toThrowError('Ships cannot overlap');
      });
  
      test('receiving an attack on an empty space', () => {
        const gameBoard = new GameBoard();
        expect(gameBoard.receiveAttack(0)).toBe(false);
        expect(gameBoard.board[0]).toBe('miss');
      });
  
      test('receiving an attack on a space with a ship', () => {
        const gameBoard = new GameBoard();
        gameBoard.placeShip(0, 3, 'horizontal');
        expect(gameBoard.receiveAttack(0)).toBe(true);
        expect(gameBoard.board[0]).toBe('hit');
      });
  
      test('receiving an attack on a space that was already attacked', () => {
        const gameBoard = new GameBoard();
        gameBoard.placeShip(0, 3, 'horizontal');
        gameBoard.receiveAttack(0);
        expect(gameBoard.receiveAttack(0)).toBe(false);
        expect(gameBoard.board[0]).toBe('hit');
      });
  
      test('checking if all ships are sunk', () => {
        const gameBoard = new GameBoard();
        gameBoard.placeShip(0, 2, 'horizontal');
        gameBoard.placeShip(3, 3, 'vertical');
        gameBoard.receiveAttack(0);
        gameBoard.receiveAttack(1);
        gameBoard.receiveAttack(3);
        gameBoard.receiveAttack(13);
        gameBoard.receiveAttack(23);
        expect(gameBoard.areAllShipsSunk()).toBe(false);
        gameBoard.receiveAttack(2);
        gameBoard.receiveAttack(4);
        expect(gameBoard.areAllShipsSunk()).toBe(true);
      });
    });
  
    describe('Player', () => {
      const { Player } = require('./battleship');
      const gameBoard = {
        receiveAttack: jest.fn(),
        areAllShipsSunk: jest.fn(),
      };
  
      afterEach(() => {
        jest.clearAllMocks();
      });
  
      test('creating a player', () => {
        const player = new Player(gameBoard);
        expect(player.gameBoard).toBe(gameBoard);
      });
  
      test('player making an attack', () => {
        const player = new Player(gameBoard);
        player.attack(0);
        expect(gameBoard.receiveAttack).toHaveBeenCalledWith(0);
      });
  
      test('player checking if they have won', () => {
        const player = new Player(gameBoard);
        player.hasWon();
        expect(gameBoard.areAllShipsSunk).toHaveBeenCalled();
        });
    });

});
  