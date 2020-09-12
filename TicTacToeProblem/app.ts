import { exit } from "process";
import { clear } from "console";

console.log('Welcome to TicTacToe');
var readLineSync = require('readline-sync');
//Declared array & variables.
let gameBoard = new Array();
let playerTurn=0;
let computer;
let player;
let playerMoves = 0;
let position = 1;
var flag = 0;
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
    if (Math.round(Math.random() % 2) == 0)
    {
            player = 'O';
            computer = 'X';
    }
    else
    {
            player = 'X';
            computer = 'O';
    }
    console.log("The player sign is : " + player);
    console.log("The computer sign is : " + computer);
    if (player == 'X') {
        playerTurnn();
    }
    else
        computerTurn();
}

//switching players
let switchPlayer = () => {
    console.log(playerTurn + " player turn ");
    if (playerTurn == 1) {
        computerTurn();
      //  playerTurnn();
    } else if (playerTurn == 0)
    {
        playerTurnn();
      //  computerTurn();
    }
    
}
//Displaying GameBoard
let displayBoard = () => {
    for (var i = 0; i < 9; i = i + 3) {
        console.log(gameBoard[i] +"|" +gameBoard[i+1] +"|"+ gameBoard[i+2]);
        console.log("-------------");
        
    }
}

//player turn
let playerTurnn = () => {
    //change 
    playerTurn = 1;
    console.log("player sign : " + player);
    position = readLineSync.question("Enter Position Between 1 to 9 ");
    if (position >= 1 && position <= 9 && position!=null) {
        isCellEmpty(position, player);
        checkCells(player);
    }
    else {
        console.log("Enter again");
        playerTurnn();
    }
}
//SmartMove.
let smartMove = (val1: number, val2: number, val3: number, sign: string) => {
    let c1 = val1;
    let c2 = val2;
    let c3 = val3;
    

    checkWinner(c1, c2, c3, computer);
    for (var i = 0; i < 3; i++) {
        if ((gameBoard[c1] == gameBoard[c2]) && (gameBoard[c1] == computer)) {
            if ((gameBoard[c3] != player ) && (flag==0)) {
                gameBoard[c3] = computer;
                playerMoves++;
                console.log("Computer move");
                console.log("smart move");
                checkWinner(c1, c2, c3, computer);
                flag = 1;
                break;
            }
        } else if (((gameBoard[c1] == gameBoard[c3]) && (gameBoard[c1] == player))) {
            if ((gameBoard[c2] != player)&& (flag == 0)) {
                gameBoard[c2] = computer;
                playerMoves++;
            }
            console.log("Computer move");
            console.log("midle of player");
            checkWinner(c1, c2, c3, computer);
            flag = 1;            
           
            break;
        } else if ((gameBoard[0] == 1) || (gameBoard[2] == 3) || (gameBoard[6] == 7) || (gameBoard[8] == 9)) {
                let arr = [0, 2, 6, 8];
            let random = Math.floor(Math.random() * arr.length);
            console.log("........b4 while..random val " + random);
            while (gameBoard[arr[random]] == computer) {
                random = Math.floor(Math.random() * arr.length);
            }
            while (gameBoard[arr[random]] != computer)
            {

                console.log("..........random val " + random);
                if ((gameBoard[arr[random]] != player) && (gameBoard[arr[random]] != computer) && (flag == 0)) {
                        gameBoard[arr[random]] = computer;
                        console.log("Computer move");
                        console.log("Corner");
                        checkWinner(c1, c2, c3, computer);
                        flag = 1;
                        playerMoves++;
                        break;
                    }
                     random = Math.floor(Math.random() * arr.length);
            }
            break; 
        }
   
            let temp = c1;
            c1 = c2;
            c2 = c3;
            c3 = temp;
    }
}


let smartMoveWin = (val1: number, val2: number, val3: number, sign: string) => {
    let c1 = val1;
    let c2 = val2;
    let c3 = val3;
    checkWinner(c1, c2, c3, computer);
    for (var i = 0; i < 3; i++) {
        if ((gameBoard[c1] == gameBoard[c2]) && (gameBoard[c1] == computer)) {
            if ((gameBoard[c3] != player) && (flag == 0)) {
                gameBoard[c3] = computer;
                playerMoves++;
                console.log("Computer move");
                console.log("smart move");
                flag = 1;
                break;
            }
        }

        let temp = c1;
        c1 = c2;
        c2 = c3;
        c3 = temp;

    }
}

let smartMoveBlock = (val1: number, val2: number, val3: number, sign: string) => {
    let c1 = val1;
    let c2 = val2;
    let c3 = val3;
    checkWinner(c1, c2, c3, computer);
    for (var i = 0; i < 3; i++) {
       if (((gameBoard[c1] == gameBoard[c3]) && (gameBoard[c1] == player))) {
            if ((gameBoard[c2] != player) && (flag == 0)) {
                gameBoard[c2] = computer;
                playerMoves++;
            }
            console.log("Computer move");
            console.log("midle of player");
            flag = 1;
            break;
        } 
        let temp = c1;
        c1 = c2;
        c2 = c3;
        c3 = temp;
    }
}

let smartMoveCorner = (val1: number, val2: number, val3: number, sign: string) => {
    let c1 = val1;
    let c2 = val2;
    let c3 = val3;


    checkWinner(c1, c2, c3, computer);
    for (var i = 0; i < 3; i++) {
     if ((gameBoard[0] == 1) || (gameBoard[2] == 3) || (gameBoard[6] == 7) || (gameBoard[8] == 9)) {
            let arr = [0, 2, 6, 8];
            let random = Math.floor(Math.random() * arr.length);
            console.log("........b4 while..random val " + random);
            while (gameBoard[arr[random]] == computer) {
                random = Math.floor(Math.random() * arr.length);
            }
            while (gameBoard[arr[random]] != computer) {

                console.log("..........random val " + random);
                if ((gameBoard[arr[random]] != player) && (gameBoard[arr[random]] != computer) && (flag == 0)) {
                    gameBoard[arr[random]] = computer;
                    console.log("Computer move");
                    console.log("Corner");
                    flag = 1;
                    playerMoves++;
                    break;
                }
                random = Math.floor(Math.random() * arr.length);
            }
            break;
        }

        let temp = c1;
        c1 = c2;
        c2 = c3;
        c3 = temp;

    }
}

//sidemove
let smartMoveSide = (val: number, computer) => {
    if ((gameBoard[val] != computer) && (gameBoard[val] != player) && (flag == 0)) {
        gameBoard[val] = computer;
        flag = 1;
        playerMoves++;
    }
}

//computer turn
let computerTurn = () => {
    console.log("computer sign : " + computer);
    playerTurn = 0;
    flag = 0;

    //smart move win
    let row;
    let col = 0;
    for (row = 0; row < 7; row += 3) {
        console.log("Comp ...." + computer)
        smartMoveWin(row, row + 1, row + 2, computer);
        smartMoveWin(col, col + 3, col + 6, computer);
        col++;
    }

    //smart move Block
    col = 0;
    for (row = 0; row < 7; row += 3) {
        console.log("Comp ...." + computer)
        smartMoveBlock(row, row + 1, row + 2, computer);
        smartMoveBlock(col, col + 3, col + 6, computer);
        col++;
    }

    //smart move Corner
    col = 0;
    for (row = 0; row < 7; row += 3) {
        console.log("Comp ...." + computer)
        smartMoveCorner(row, row + 1, row + 2, computer);
        smartMoveCorner(col, col + 3, col + 6, computer);
        col++;
    }
    //smart center
    if ((gameBoard[4] == 5)&& (flag==0)) {
        flag = 1;
        gameBoard[4] = computer;
        playerMoves++;
    }

    //smart move side
    smartMoveSide(1, computer);
    smartMoveSide(3, computer);
    smartMoveSide(5, computer);
    smartMoveSide(7, computer);
  

    checkCells(computer);
    if (flag == 0) {
        isCellEmpty(Math.floor((Math.random() * 8) + 1), computer);
    }
    console.log(position);
    console.log(computer);
}

//checking Position is already filled or blank
let isCellEmpty = (position:number,signn:string) => {
    let pos = position - 1;
    console.log(pos);
    let sign = signn;
    console.log(gameBoard[pos]);
    if (gameBoard[pos] != 'X' && gameBoard[pos] != 'O') {
        gameBoard[pos] = sign;
        displayBoard();
        playerMoves++;
    }
    else {
        console.log("Already occupied");
        console.log("Please enter again");
        if (playerTurn == 0) {
            computerTurn();
        }
        else {
            playerTurnn();
        }
    }

}

//checking condition to win.
let checkWinner = (v1: number, v2: number, v3: number,sign?:string) => {

    if ((gameBoard[v1] == gameBoard[v2]) && (gameBoard[v1] == gameBoard[v3])) {
        if (gameBoard[v1] == computer) {
            console.log("computer win");
        }
        else {
            console.log("player win");
        }
        console.log("The comp sign  " + sign);
        gameBoard[v1] = gameBoard[v2] = gameBoard[v3];
        displayBoard();
            exit();
        }
    }

//checking cells.
let checkCells = (sign?: string) => {
    console.log("In checkcellllllllll" + sign);
    if (playerTurn == 1) {
        let row = 0;
        let col = 0;
        for (row = 0; row < 7; row += 3) {
            checkWinner(row, row + 1, row + 2,player);
            checkWinner(col, col + 3, col + 6,player);
            col++;
        }
        checkWinner(0,4,8,player);
        checkWinner(2,4,6,player);
    }
    else {
        let row;
        let col = 0;
        for (row = 0; row < 7; row += 3) {
            console.log("Comp ...." + sign)
            checkWinner(row, row + 1, row + 2, computer);
            checkWinner(col, col + 3, col + 6, computer);
            col++;

        }
        checkWinner(0, 4, 8, computer);
        checkWinner(2, 4, 6, computer);
    }
}
//Playing Game untill game ends.
let play = () => {
    resetBoard();
    assignSignToPlayer();
    while (playerMoves < TOTAL_MOVES) {
       // clear();
        displayBoard();
        switchPlayer();
    }
    displayBoard();
    console.log("tie");
}

//main start
play();
