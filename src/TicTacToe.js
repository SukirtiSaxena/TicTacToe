/**
  * 
  * [ [1, 2, 3],
  *   [4, 5, 6],
  *   [7, 8, 9] ]
  * The function should return "X Wins " if player X has won, "0 Wins" if the player 0 has won, and 'No Winner' if there is currently no winner.
  */


const ticTacToeGame = (moveX, move0) => {
   let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
   ];
   let winner = "Still Not Decided";
   let isGameOver = false;
   for (let i = 0; i < moveX.length; i++) {
      if ((moveX[i][0] > 2) || (moveX[i][0] < 0) || (moveX[i][1] > 2) || (moveX[i][1] < 0))
         return "Input should be within the board";
      if ((i < move0.length) && ((move0[i][0] > 2) || (move0[i][0] < 0) || (move0[i][1] > 2) || (move0[i][1] < 0)))
         return "Input should be within the board";

      if (winner = "Still Not Decided") {
         let x = moveX[i][0];
         let y = moveX[i][1];
         board[x][y] = "X";
         winner = findWinner(board);
         if (winner === "X" || winner === "0") return winner; 

         let a = move0[i][0];
         let b = move0[i][1];
         board[a][b] = "0";
         winner = findWinner(board);
         if (winner === "X" || winner === "0") return winner; 
      }
      else
         return winner;
   };
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