/* eslint-disable import/prefer-default-export */

function createGrid(container, objList) {
    for (let i=0; i < 100; i+= 1) {
        const square = document.createElement("div");
        square.classList.add("square");
        if (objList[i].ship != null) {
            square.classList.add("ship");
        }
        container.appendChild(square);
    }
}

export function createGrids(objList1, objList2) {
    const p1Container = document.querySelector(".p1-container");
    const p2Container = document.querySelector(".p2-container");
    createGrid(p1Container, objList1);
    createGrid(p2Container, objList2);
}