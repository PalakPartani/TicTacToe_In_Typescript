console.log('Welcome to TicTacToe');
//Declared array.
let gameBoard = new Array();
let playerSign;
//Resetting Game Board By Initilizing Array With Default Value
let resetBoard = () => {
    gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("The board is resetted: " + gameBoard);
};
//Assigning Letter X or O To Player 
let assignSignToPlayer = () => {
    if ((Math.random() % 2) == 1) {
        playerSign = 'X';
    }
    else {
        playerSign = 'O';
    }
    console.log("The player sign is : " + playerSign);
};
resetBoard();
assignSignToPlayer();
//# sourceMappingURL=app.js.map