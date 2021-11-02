const  { ticTacToeGame , findWinner }  = require("./TicTacToe.js");

describe("ticTacToeGame", () => {
    test(" Retun winner of the game ", () => {
        const moveX = [ [0,0], [0,1], [0,2] ];
        const move0 = [ [2,1],[2,2]];
        expect(ticTacToeGame(moveX,move0)).toEqual("X");
     });

     test(" if X input value is > 2 then error message 'Input should be within the board' ", () => {
        const moveX = [[4,0]];
        const move0 = [[2,1]];
        expect(ticTacToeGame(moveX,move0)).toEqual("Input should be within the board");
     });

     test("  if X input value is < 0 then error message 'Input should be within the board'", () => {
        const moveX = [[2,-2]];
        const move0 = [[2,1]];
        expect(ticTacToeGame(moveX,move0)).toEqual("Input should be within the board");
     });

     test(" if 0 input value is > 2 then error message 'Input should be within the board' ", () => {
        const moveX = [[2,0]];
        const move0 = [[6,1]];
        expect(ticTacToeGame(moveX,move0)).toEqual("Input should be within the board");
     });

     test("  if 0 input value is < 0 then error message 'Input should be within the board'", () => {
        const moveX = [[2,2]];
        const move0 = [[2,-1]];
        expect(ticTacToeGame(moveX,move0)).toEqual("Input should be within the board");
     });

    });
