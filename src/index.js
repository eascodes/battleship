/* eslint-disable no-else-return */
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Grid } from "./grid"
import { gameDisplay } from "./gameDisplay";

const gameLoop = () => {
    
    const humanBoard = Gameboard();
    humanBoard.placeRandomShips();
    const computerBoard = Gameboard();
    computerBoard.placeRandomShips();
    const p1Container = document.querySelector(".p1-container");
    const p2Container = document.querySelector(".p2-container");

    const human = Player(computerBoard);
    const computer = Player(humanBoard);
    const humanGrid = Grid(p1Container, human, humanBoard);
    const computerGrid = Grid(p2Container, computer, computerBoard);
    
    human.activeTurn = true;
    humanGrid.displayGrid();
    computerGrid.displayGrid();

    const display = gameDisplay(humanGrid, computerGrid, humanBoard, computerBoard, human, computer);

    display.humanPlay();
}

const startButton = document.querySelector("#start");
startButton.addEventListener("click", gameLoop);

