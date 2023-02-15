import { Ship } from "./ship";

function findIndex(arr, target) {
    for (let i=0; i < arr.length; i+= 1) {
        if (arr[i][0] === target[0] && arr[i][1] === target[1]) {
            return i;
        }
    }
}

/* eslint-disable import/prefer-default-export */
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

    const hasShip = (coord) => {
        const target = [coord[0], coord[1]];
        const index = findIndex(board, target);
        if (objList[index].ship != null) {
            return true;
        } 
        return false;
    }

    return { board, objList, placeShip, hasShip }

}