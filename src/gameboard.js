import { Ship } from "./ship";
import { randomInteger } from "./player";

export function findIndex(arr, target) {
    for (let i=0; i < arr.length; i+= 1) {
        if (arr[i][0] === target[0] && arr[i][1] === target[1]) {
            return i;
        }
    }
}

// Return random x or y position
function randomPosition() {
    const randomInt = randomInteger(0,1);
    if (randomInt === 0) return "x";  
    return "y";
}

// Return random coordinates based on random position & specified ship length
function randomCoordRandomPos(position, shipLength) {
    let randomX;
    let randomY;
    if (position === "x") {
        randomX = randomInteger(0,9);
        randomY = randomInteger(0,(9-(shipLength - 1)));
        
    } else {
        randomX = randomInteger((0+(shipLength - 1)),9);
        randomY = randomInteger(0,9);
    }
    const randomCoord = [randomX, randomY];
    return randomCoord;   
}

export const Gameboard = () => {

    const buildBoard = () => {
        const board = [];
        for (let j=0; j < 10; j+= 1) {
            for (let i=0; i < 10; i+= 1) {
                board.push([j,i]);
            }
        }
        return board;
    }

    const buildObjList = (arr) => {
        const newArr = [];
        for (let i=0; i < arr.length; i+= 1) {
            newArr[i] = {
                ship: null,
                attacked: null
            }
        }
        return newArr;
    }

    const board = buildBoard();
    const objList = buildObjList(board);

    const placeShip = (coord, shipLength, position) => {
        const newShip = Ship(shipLength);
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        objList[index].ship = newShip;

        if (position === "x") {
            for (let i=1; i < shipLength; i+= 1) {
                objList[index+i].ship = newShip;
            }
        } else {
            let j = 10;
            for (let i=1; i < shipLength; i+= 1) {
                objList[index-j].ship = newShip;
                j += 10;
            }
        }
    }

    const placeRandomShips = () => {
        // Place carrier - 5 spaces
        const carrierPos = randomPosition();
        const carrierCoord = randomCoordRandomPos(carrierPos, 5);
        placeShip(carrierCoord, 5, carrierPos);

        // Place battleship - 4 spaces
        const battlePos = randomPosition();
        const battleCoord = randomCoordRandomPos(battlePos, 4);
        placeShip(battleCoord, 4, battlePos);

        // Place cruiser - 3 spaces
        const cruiserPos = randomPosition();
        const cruiserCoord = randomCoordRandomPos(cruiserPos, 3);
        placeShip(cruiserCoord, 3, cruiserPos);

        // Place submarine - 3 spaces
        const subPos = randomPosition();
        const subCoord = randomCoordRandomPos(subPos, 3);
        placeShip(subCoord, 3, subPos);

        // Place destroyer - 2 spaces
        const destroyPos = randomPosition();
        const destroyCoord = randomCoordRandomPos(destroyPos, 2);
        placeShip(destroyCoord, 2, destroyPos);
    }

    const hasShip = (coord) => {
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        if (objList[index].ship != null) {
            return true;
        } 
        return false;
    }

    const receiveAttack = (coord) => {
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        if (objList[index].ship != null) {
            objList[index].ship.hit();
            objList[index].attacked = true;
        } else {
            objList[index].attacked = true;
        }
    }

    const allShipsSunk = () => {
        let result = true;
        for (let i=0; i < objList.length; i+= 1) {
            if (objList[i].ship) {
                if (objList[i].ship.isSunk() !== true) {
                    result = false;
                }
            }
        }
        return result;
    }

    return { board, objList, placeShip, placeRandomShips, hasShip, receiveAttack, allShipsSunk }

}