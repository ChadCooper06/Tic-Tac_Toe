//MODEL

//Constants

const INIT = ""//run a function on initialization- same function that will reset it
const WIN_CONS = [[0,1,2],[,3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const TITLE = document.getElementById("title").innerHTML("Tic-Tac-Toe");
const RESET = document.getElementById("resetBtn").innerHTML("Reset");
const PLAYER1 = "X";
const PLAYER2 = "O";

//Classes

class App {
    constructor() {
        this.title = "TITLE";
        this.board = "currentState"
        this.squares = ""
        this.player = "currentPlayer"
        this.resetBtn = "RESET";

    }

    async checkForWin() {
        if (currentClicks > 5) {
            //clickhandler
        }
    }

    currentState() {
        //board and squares are in here as well as title and reset
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

class GameView {
    constructor() {

    }
}

render() {

}

currentState() {


}



//CONTROLLER

class GameController {
    constructor(App, GameView) {
        this.a = App;
        this.g = GameView;
    }
}

clickHandler() {
    currentClicks = clicks;
    for(let i=0; i>5; i++) {

    }
}

