// eslint-disable-next-line import/prefer-default-export
export const gameDisplay = (grid1, grid2, gameboard1, gameboard2, player1, player2) => {
    const refreshGrids = () => {
        grid1.removeGrid();
        grid2.removeGrid();
        grid1.displayGrid();
        grid2.displayGrid();
    }

    function checkGameboards() {
        if (gameboard1.allShipsSunk() === true) {
            return true;        
        } if (gameboard2.allShipsSunk() === true) {
            return true;       
        } 
            return false;
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
                        console.log("GAME OVER!");
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
            console.log("GAME OVER!");
        } else {
            humanPlay();
        }
    }

    return { humanPlay, computerPlay }
}