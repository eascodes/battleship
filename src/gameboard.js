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

    const placeShip = (x,y) => {
        const newShip = Ship();
        const start = [x,y];
        const index = findIndex(board, start);
        objList[index].ship = newShip;
    }

    const hasShip = (x,y) => {
        const target = [x,y];
        const index = findIndex(board, target);
        if (objList[index].ship != null) {
            return true;
        } 
        return false;
    }

    return { board, objList, placeShip, hasShip }

}