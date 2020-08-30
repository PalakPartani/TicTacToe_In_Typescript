"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
console.log('Welcome to TicTacToe');
var readLineSync = require('readline-sync');
//Declared array & variables.
let gameBoard = new Array();
let playerSign;
let playerTurn = 0;
let computer;
let player;
let computerTurn;
let playerMoves = 0;
let position = 1;
//Initializing Constants
const TOTAL_MOVES = 9;
//Resetting Game Board By Initilizing Array With Default Value
let resetBoard = () => {
    gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    displayBoard();
    console.log("The board is resetted: " + gameBoard);
};
//Assigning Letter X or O To Player 
let assignSignToPlayer = () => {
    if ((Math.random() % 2) == 0) {
        player = 'O';
        computer = 'X';
    }
    else {
        player = 'X';
        computer = 'O';
    }
    console.log("The player sign is : " + player);
    console.log("The computer sign is : " + computer);
};
//switcing players
let switchPlayer = () => {
    console.log(playerTurn + " pturn ");
    if (playerTurn == 1) {
        playerTurnn();
    }
    else {
        computerTurn();
    }
};
//Displaying GameBoard
let displayBoard = () => {
    for (var i = 0; i < 9; i = i + 3) {
        console.log("|" + gameBoard[i] + "|" + gameBoard[i + 1] + "|" + gameBoard[i + 2]);
        console.log("-------------");
    }
};
//player turn
let playerTurnn = () => {
    playerTurn = 0;
    console.log("player sign : " + player);
    position = readLineSync.question("Enter Position Between 1 to 9 ");
    if (position >= 1 && position <= 9 && position != null) {
        isCellEmpty(position, player);
    }
    else {
        console.log("Enter again");
        playerTurnn();
    }
};
//computer turn
computerTurn = () => {
    //if ()
    console.log("computer sign : " + computer);
    playerTurn = 1;
    position = Math.floor((Math.random() * 9) + 1);
    console.log(position);
    console.log(computer);
    if (position >= 1 && position <= 9 && position != null) {
        isCellEmpty(position, computer);
    }
    else {
        console.log("c played ...");
        computerTurn();
    }
};
//checking Position is already filled or blank
let isCellEmpty = (position, signn) => {
    let pos = position - 1;
    console.log(pos);
    let sign = signn;
    console.log(gameBoard[pos]);
    if (gameBoard[pos] != 'X' && gameBoard[pos] != 'O') {
        gameBoard[pos] = sign;
        playerMoves++;
    }
    else {
        console.log("Already occupied");
        console.log("Please enter again");
        if (playerTurn == 1) {
            computerTurn();
        }
        else {
            playerTurnn();
        }
    }
};
//positionIsOccupied
let positionIsOccupied = (position) => {
    let pos = position - 1;
    if (gameBoard[pos] != playerSign) {
        gameBoard[pos] = playerSign;
        playerMoves++;
    }
    else {
        console.log("Position Filled");
    }
};
//user playing.
let userPlay = () => {
    let position = readLineSync.question("Enter Position Between 1 to 9 : ");
    if (position >= 1 && position <= 9) {
        positionIsOccupied(position);
    }
    else {
        console.log("Invalid Position");
        userPlay();
    }
};
//change sign.
let switchUser = () => {
    playerSign == 'X' ? playerSign = 'O' : playerSign = 'X';
};
//Playing Game untill game ends.
let play = () => {
    resetBoard();
    assignSignToPlayer();
    while (playerMoves < TOTAL_MOVES) {
        //userPlay();
        displayBoard();
        checkCells();
        switchPlayer();
        // switchUser();
    }
    console.log("tie");
};
//checking condition to win.
let checkWinner = (val1, val2, val3) => {
    if (val1 == val2 && val1 == val3) {
        console.log("win");
        process_1.exit();
    }
};
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
};
play();
//# sourceMappingURL=app.js.map