/* eslint-disable import/prefer-default-export */

export function displayGrid(container, player, gameboard) {
    const list = gameboard.objList;
    for (let i=0; i < 100; i+= 1) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        if (list[i].ship != null && list[i].attacked === null) {
            square.classList.add("ship");
        } else if (list[i].ship != null && list[i].attacked === true) {
            square.classList.add("hit-ship");
        } else if (list[i].ship === null && list[i].attacked === true) {
            square.classList.add("hit-miss");
        }

        if (player.activeTurn === false) {
            square.classList.add("active");
            square.addEventListener("click", () => {
                gameboard.receiveAttack(i);
                refreshGrid(container, player, gameboard);
            })
        } else {
            square.classList.remove("active");
        }

        container.appendChild(square);
    }
}

function removeGrid(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export function refreshGrid(container, player, gameboard) {
    removeGrid(container);
    displayGrid(container, player, gameboard);
}