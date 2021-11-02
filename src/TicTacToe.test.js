const  {ticTacToeGame} = require("./TicTacToe.js");

describe("ticTacToeGame", () => {
   test(" Return 'X' if winner of the game is X", () => {
      const moveX = [[0, 0], [0, 1], [0, 2]];
      const move0 = [[2, 1], [2, 2]];
      expect(ticTacToeGame(moveX, move0)).toEqual("X");
   });

   test(" Return '0' if winner of the game is 0 ", () => {
      const moveX = [[0, 0], [0, 1], [1, 2]];
      const move0 = [[0, 2], [1, 1], [2, 0]];
      expect(ticTacToeGame(moveX, move0)).toEqual("0");
   });

   test(" Return 'No Winner in this game' if there is no winner in the game ", () => {
      const moveX = [[0,1],[1,0],[1,2],[2,0],[2,2]];
      const move0 = [[0,0],[0,2],[1,1],[2,1]];
      expect(ticTacToeGame(moveX, move0)).toEqual("No Winner in this game");
   });

   test(" if X input value is > 2 then error message 'Input should be within the board' ", () => {
      const moveX = [[4, 0]];
      const move0 = [[2, 1]];
      expect(ticTacToeGame(moveX, move0)).toEqual("Input should be within the board");
   });

   test("  if X input value is < 0 then error message 'Input should be within the board'", () => {
      const moveX = [[2, -2]];
      const move0 = [[2, 1]];
      expect(ticTacToeGame(moveX, move0)).toEqual("Input should be within the board");
   });

   test(" if 0 input value is > 2 then error message 'Input should be within the board' ", () => {
      const moveX = [[2, 0]];
      const move0 = [[6, 1]];
      expect(ticTacToeGame(moveX, move0)).toEqual("Input should be within the board");
   });

   test("  if 0 input value is < 0 then error message 'Input should be within the board'", () => {
      const moveX = [[2, 2]];
      const move0 = [[2, -1]];
      expect(ticTacToeGame(moveX, move0)).toEqual("Input should be within the board");
   });

});
