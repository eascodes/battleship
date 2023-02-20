import { findIndex } from "./gameboard";

// Return random integer
export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Return random coordinates contained within board
function randomCoord(game) {
    const coord = [(randomInteger(0,9)),(randomInteger(0,9))];
    const index = findIndex(game.board, coord);
    if (game.objList[index].attacked === null) {
        return coord;
    } 
        randomCoord(game);
    
}

export const Player = (enemyGame) => {

    const sendAttack = (coord) => {
        if (!coord) {
            // Attack random square if no coordinates specified
            const random = randomCoord(enemyGame);
            enemyGame.receiveAttack(random);
        } else {
            enemyGame.receiveAttack(coord);
        }
    }

    const activeTurn = false;

    return { sendAttack, activeTurn }

}