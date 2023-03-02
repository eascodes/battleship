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
                gameboard2.receiveAttack(i);
                refreshGrids();
                player1.activeTurn = false;
                if (checkGameboards() === true) {
                    console.log("GAME OVER!");
                } else {
                    computerPlay();
                }
            });
        }
    }

    const computerPlay = () => {
        player2.activeTurn = true;
        player2.sendAttack();
        player2.activeTurn = false;
        player1.activeTurn = true;
        refreshGrids();
        if (checkGameboards() === true) {
            console.log("GAME OVER!");
        } else {
            humanPlay();
        }
    }

    return { humanPlay, computerPlay }
}