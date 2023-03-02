/* eslint-disable import/prefer-default-export */

export const Grid = (container, player, gameboard) => {
    const list = gameboard.objList;
    
    // Create squares for boards
    const displayGrid = () => {
    for (let i=0; i < 100; i+= 1) {
        const square = document.createElement("div");
        square.classList.add("square");
        
        // Add appropriate square classes
        if (list[i].ship != null && list[i].attacked === null) {
            square.classList.add("ship");
        } else if (list[i].ship != null && list[i].attacked === true) {
            square.classList.add("hit-ship");
        } else if (list[i].ship === null && list[i].attacked === true) {
            square.classList.add("hit-miss");
        }

        // Add/remove active & inactive classes
        if (player.activeTurn === false) {
            square.classList.remove("inactive");
            square.classList.add("active");
        } else {
            square.classList.remove("active");
            square.classList.add("inactive");
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