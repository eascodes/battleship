/* eslint-disable no-else-return */
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Grid } from "./grid"
import { gameDisplay, startGameDisplay } from "./gameDisplay";

const startButton = document.querySelector("#start");
const p1Container = document.querySelector(".p1-container");
const p2Container = document.querySelector(".p2-container");

const gameLoop = () => {
    // Display gameboard headers & instructions
    startGameDisplay(startButton);

    // Create players, gameboards, & displays
    const humanBoard = Gameboard();
    humanBoard.placeRandomShips();
    const computerBoard = Gameboard();
    computerBoard.placeRandomShips();
    const human = Player(computerBoard);
    const computer = Player(humanBoard);
    const humanGrid = Grid(p1Container, human, humanBoard);
    const computerGrid = Grid(p2Container, computer, computerBoard);
    
    // Start game with human as first player
    human.activePlayer = true;
    humanGrid.displayGrid();
    computerGrid.displayGrid();
    const display = gameDisplay(humanGrid, computerGrid, humanBoard, computerBoard, computer);
    display.humanPlay();
}

startButton.addEventListener("click", gameLoop);