// eslint-disable-next-line import/prefer-default-export
export const gameDisplay = (grid1, grid2, gameboard1, gameboard2, player1, player2) => {
    const refreshGrids = () => {
        grid1.removeGrid();
        grid2.removeGrid();
        grid1.displayGrid();
        grid2.displayGrid();
    }

    // Check gameboards to see if all ships are sunk
    function checkGameboards() {
        if (gameboard1.allShipsSunk() === true || gameboard2.allShipsSunk() === true) {
            return true;        
        }
            return false;
    }

    const displayWinner = () => {
        // Display the winner modal
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
        const modalContent = document.querySelector(".modal-content");
        const modalText = document.createElement("p");
        modalContent.appendChild(modalText);
        // Load the appropriate winner text
        if (gameboard1.allShipsSunk() === true) {
            modalText.textContent = "You lost! Better luck next time.";
        } else {
            modalText.textContent = "You won! Play again?";
        }

        // Game reset button
        const reset = document.createElement("button");
        modalContent.appendChild(reset);
        reset.textContent = "NEW GAME";
        reset.addEventListener("click", () => {
            location.reload();
        })
    }

    const humanPlay = () => {
        const gridList = document.querySelectorAll(".active");
        for (let i=0; i<gridList.length; i+=1) {
            gridList[i].addEventListener("click", () => {
                // Only record attack if square hasn't been attacked yet
                if (gameboard2.objList[i].attacked === null) {
                    // Record attack & refresh grid
                    gameboard2.receiveAttack(i);
                    refreshGrids();
                    // Check for winner
                    if (checkGameboards() === true) {
                        displayWinner();
                    } else {
                        return computerPlay();
                    }
                } else {
                    // Restart turn if square has already been attacked
                    return humanPlay();
                }
            });
        }
    }

    const computerPlay = () => {
        player2.sendAttack();
        refreshGrids();
        if (checkGameboards() === true) {
            displayWinner();
        } else {
            // Pass turn back to human if no winner yet
            humanPlay();
        }
    }

    return { humanPlay, computerPlay }
}
