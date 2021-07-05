export default class GameView{

    updateBoard(game){
        this.updateTurn(game);
        for (let i = 0; i < game.board.length; i++){
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
            console.log(tile);
            tile.textContent = game.board[i];
            
        }
    }
    static foundWin(winningCombination){
        // alert("Winnn");
        winningCombination.forEach(i => {
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
            console.log(tile);
            tile.classList.add("winner-tiles");
        });
    }
    updateTurn(game){
        let playerX= document.querySelector(".player-x");
        let playerO= document.querySelector(".player-o");

        if(game.turn == "X"){
            playerO.classList.remove("active");
            playerX.classList.add("active");
        }else{
            playerX.classList.remove("active");
            playerO.classList.add("active");
        }

    }
}