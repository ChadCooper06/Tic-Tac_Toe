//MODEL

//Constants

const INIT = ""//run a function on initialization- same function that will reset it
const WIN_CONS = "[[0,1,2],[,3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]";
const TITLE = document.getElementById("title").innerHTML("Tic-Tac-Toe");
const RESET = document.getElementById("resetBtn").innerHTML("Reset");

//Classes

class App {
    constructor() {
        this.title = "TITLE";
        this.board = "currentState"
        this.squares = ""
        this.player = "currentPlayer"
        this.resetBtn = "RESET";

    }

    currentState() {
        //board and squares are in here as wel as title and reset
    }

    currentPlayer(){
        if(INIT || player2Click){
            player = player1;
        }else if (player1Click){
            player = player2;
        }
    }

    
}


//VIEW

currentState() {
    
}



//CONTROLLER

