import GameView from "./gameView.js";

export default class Game {
    constructor(){
        this.turn = "X";
        this.board = new Array(9).fill(null);

    }
    
    nextTurn(){
        if (this.turn == "X"){
            this.turn = "O";
        }else{
            this.turn ="X";
        }
    }
    makeMove(i){
        var winCombo = this.checkWin();
        if(winCombo){
            return;
        }

        if(this.board[i]!="X" &&  this.board[i]!="O"){
            this.board[i] = this.turn;
            
            winCombo = this.checkWin();
            if(winCombo){
                GameView.foundWin(winCombo);
                return;
            }else{
                
                this.nextTurn();
            }
        }
        
    }
    checkWin(){
        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [4,6,2],
            [0,4,8],
            

        ];
        for(const combination of winningCombinations){
            //destructuring
            const [a,b,c] = combination;
            if(this.board[a] && this.board[a] === this.board[b] && this.board[b] === this.board[c]){
                return combination;
            }
        }
        return null;
    }
}