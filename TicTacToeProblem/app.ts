import { exit } from "process";

console.log('Welcome to TicTacToe');
var readLineSync = require('readline-sync');
//Declared array & variables.
let gameBoard = new Array();
let playerSign;
let playerTurn;
let playerMoves = 0;
let position=1;
//Initializing Constants
const TOTAL_MOVES = 9;

//Resetting Game Board By Initilizing Array With Default Value
let resetBoard = () => {
    gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    displayBoard();
    console.log("The board is resetted: " + gameBoard);
}
//Assigning Letter X or O To Player 
let assignSignToPlayer = () => {
    if ((Math.random() % 2) == 1) {
        playerSign = 'X';
        playerTurn = true;
    }
    else {
        playerSign = 'O';
        playerTurn = true;
    }
    console.log("The player1 sign is : " + playerSign);
}
//Displaying GameBoard
let displayBoard = () => {
    for (var i = 0; i < 9; i = i + 3) {
        console.log("|"+gameBoard[i] +"|" +gameBoard[i+1] +"|"+ gameBoard[i+2]);
        console.log("-------------");
        
    }
}
//positionIsOccupied
let positionIsOccupied = (position: number) => {
    let pos = position-1;
    if (gameBoard[pos] != playerSign) {
        gameBoard[pos] = playerSign;
        playerMoves++;
    }
    else {
        console.log("Position Filled");
    }
}
//user playing.
let userPlay = () => {
    let position= readLineSync.question("Enter Position Between 1 to 9 : ");
    if (position >= 1 && position <= 9) {
        positionIsOccupied(position);
    }
    else {
        console.log("Invalid Position");
        userPlay();
    }
}

//change sign.
let switchUser = () => {
    playerSign == 'X' ? playerSign = 'O' : playerSign = 'X';
}
//Playing Game untill game ends.
let play = () => {
    while (playerMoves < TOTAL_MOVES) {
        userPlay();
        displayBoard();
        checkCells();
        switchUser();
    }
    console.log("tie");
}
//checking condition to win.
let checkWinner = (val1: number, val2: number, val3: number) => {
        if (val1 == val2 && val1 == val3) {
            console.log("win");
            exit();
        }
    }

//checking cells.
let checkCells = () => {
    let row = 0;
    let col = 0;
    for (row = 0; row < 9; row = row + 3) {
        checkWinner(gameBoard[row], gameBoard[row + 1], gameBoard[row + 2]);
        checkWinner(gameBoard[col], gameBoard[col + 3], gameBoard[col + 6]);
        col = col + 1;
    }
    checkWinner(gameBoard[0], gameBoard[4], gameBoard[8]);
    checkWinner(gameBoard[2], gameBoard[4], gameBoard[6]);
}
resetBoard();
assignSignToPlayer();
play();