/* eslint-disable import/prefer-default-export */

export const Grid = (container, player, gameboard) => {
    const list = gameboard.objList;
    
    // Create squares for boards
    const displayGrid = () => {
    for (let i=0; i < 100; i+= 1) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        // Add appropriate square classes for human board
        if (player.activeTurn === true) { 
            if (list[i].ship != null && list[i].attacked === null) {
                square.classList.add("ship");
            } else if (list[i].ship != null && list[i].attacked === true) {
                square.classList.add("hit-ship");
            } else if (list[i].ship === null && list[i].attacked === true) {
                square.classList.add("hit-miss");
            }} else {
                square.classList.add("active");
                if (list[i].ship != null && list[i].attacked === true) {
                    square.classList.add("hit-ship");
                } else if (list[i].ship === null && list[i].attacked === true) {
                    square.classList.add("hit-miss");
                }
            }

        container.appendChild(square);
    }}

    const removeGrid = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    return { displayGrid, removeGrid }
}