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
   console.log("board",board);
   return findWinner(board);
};

const findWinner = (board) => {

   if ((board[0][0] !== null) &&
      ((board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
         (board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
         (board[0][0] === board[1][0] && board[0][0] === board[2][0]))) 
      return board[0][0];


   if ((board[0][2] !== null) &&
      ((board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
         (board[0][2] === board[1][1] && board[0][2] === board[2][0])))    
      return board[0][2];

   if (board[0][1] !== null && board[0][1] === board[1][1] && board[0][1] === board[2][1]) 
      return board[0][1];
   
   else
      if (board[1][0] !== null && board[1][0] === board[1][1] && board[1][0] === board[1][2])   
         return board[1][0];
      
      else
         if (board[2][0] !== null && board[2][0] === board[2][1] && board[2][0] === board[2][2])   
            return board[2][0];
         
         else
            if (board.some(row => row.includes(null)))
               return "Still Not Decided";
            else           
               return "No Winner in this game";         
};

module.exports = { ticTacToeGame, findWinner };