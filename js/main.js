import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) =>{
    tile.addEventListener("click", ()=>{
        if(game.turn == "X"){
            tile.classList.add("clicked-by-x");
        }else{
            tile.classList.add("clicked-by-o");
        }
        onTileClick(tile.dataset.index);
    })
})
let button = document.querySelector(".restart");
button.addEventListener("click", ()=>{
    game = new Game();
    // let gameView = new GameView();
    gameView.updateBoard(game);
})

// function winnerFound(){

// }
function onTileClick(i){
    game.makeMove(i);
    //update color
    gameView.updateBoard(game);
}
gameView.updateBoard(game);
