/* eslint-disable no-else-return */
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Grid } from "./grid"
import { gameDisplay } from "./gameDisplay";

const startButton = document.querySelector("#start");
const p1Container = document.querySelector(".p1-container");
const p2Container = document.querySelector(".p2-container");
const gridHeader1 = document.querySelector(".grid-header1");
const gridHeader2 = document.querySelector(".grid-header2");

const gameLoop = () => {

    const humanBoard = Gameboard();
    humanBoard.placeRandomShips();
    const computerBoard = Gameboard();
    computerBoard.placeRandomShips();

    const human = Player(computerBoard);
    const computer = Player(humanBoard);
    const humanGrid = Grid(p1Container, human, humanBoard);
    const computerGrid = Grid(p2Container, computer, computerBoard);
    
    human.activePlayer = true;
    humanGrid.displayGrid();
    computerGrid.displayGrid();

    const display = gameDisplay(humanGrid, computerGrid, humanBoard, computerBoard, human, computer);

    display.humanPlay();
}

const startGameDisplay = () => {
    const header = document.querySelector(".header");
    header.removeChild(startButton);
    const label1 = document.createElement("h3");
    label1.textContent = "YOUR BOARD";
    gridHeader1.appendChild(label1);
    const label2 = document.createElement("h3");
    label2.textContent = "ENEMY BOARD";
    gridHeader2.appendChild(label2);

    gameLoop();
}

startButton.addEventListener("click", startGameDisplay);

