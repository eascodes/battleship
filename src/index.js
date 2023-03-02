/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Grid } from "./grid"
import { gameDisplay } from "./gameDisplay";

const p1Container = document.querySelector(".p1-container");
const p2Container = document.querySelector(".p2-container");

export const gameLoop = () => {

    // Create human and computer players, gameboards, & displays
    const humanBoard = Gameboard();
    humanBoard.placeRandomShips();
    const computerBoard = Gameboard();
    computerBoard.placeRandomShips();
    const human = Player(computerBoard);
    const computer = Player(humanBoard);
    const humanGrid = Grid(p1Container, human, humanBoard);
    const computerGrid = Grid(p2Container, computer, computerBoard);
    
    // Display the boards with human as first player
    human.activePlayer = true;
    humanGrid.displayGrid();
    computerGrid.displayGrid();
    const display = gameDisplay(humanGrid, computerGrid, humanBoard, computerBoard, human, computer);

    // Start the game
    display.humanPlay();
}


