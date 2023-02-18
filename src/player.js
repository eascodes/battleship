import { findIndex } from "./gameboard";

/* eslint-disable import/prefer-default-export */
function randomInteger(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

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
            const random = randomCoord(enemyGame);
            enemyGame.receiveAttack(random);
        } else {
            enemyGame.receiveAttack(coord);
        }
    }

    const activeTurn = false;

    return { sendAttack, activeTurn }

}