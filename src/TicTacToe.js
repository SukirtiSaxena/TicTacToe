/**
  * ## Tic Tac Toe Game
  */


const ticTacToeGame = (moveX, move0) => {
   let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
   ];
   let winner = "Still Not Decided";
   if ((moveX.flat().filter(x => x < 0 || x > 2)).length > 0 || (move0.flat().filter(x => x < 0 || x > 2)).length > 0)
      return "Input should be within the board";

   for (let i = 0; i < moveX.length; i++) {
      if (winner = "Still Not Decided") {
         winner = movesOnBoard(moveX[i][0], moveX[i][1], "X", board);
         if (winner === "X" || winner === "0" || winner === "No Winner in this game") return winner;

         winner = movesOnBoard(move0[i][0], move0[i][1], "0", board);
         if (winner === "X" || winner === "0" || winner === "No Winner in this game") return winner;
      }
      else
         return winner;
   };
};

const movesOnBoard = (row, column, move, board) => {
   let x = row;
   let y = column;
   board[x][y] = move;
   console.log("board", board);
   return findWinner(board);
};

const findWinner = (board) => {
   let flatBoard = board.flat();
   for (let i = 0; i < 8; i += 3) {
      if (flatBoard[i] !== null && flatBoard[i] === flatBoard[i + 1] && flatBoard[i] === flatBoard[i + 2])
         return flatBoard[i];
   };
   for (i = 0; i < 3; i++) {
      if (flatBoard[i] !== null && flatBoard[i] === flatBoard[i + 3] && flatBoard[i] === flatBoard[i + 6])
         return flatBoard[i];
   };
   if (flatBoard[0] !== null && flatBoard[0] === flatBoard[4] && flatBoard[0] === flatBoard[8])
      return flatBoard[0];
   if (flatBoard[2] !== null && flatBoard[2] === flatBoard[4] && flatBoard[2] === flatBoard[6])
      return flatBoard[2];
   else
      if (board.some(row => row.includes(null)))
         return "Still Not Decided";
      else
         return "No Winner in this game";
};

module.exports = { ticTacToeGame };