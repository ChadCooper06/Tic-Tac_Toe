//MODEL

//Constants

//const INIT = ""//run a function on initialization- same function that will reset it
const WIN_CONS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const TITLE = "Tic-Tac-Toe";
const RESET = "Reset Game";
const PLAYER1 = "X";
const PLAYER2 = "O";
const TILES = [0, 1, 2, 3, 4, 5, 6, 7, 8];


function init() {
    resetBtn.addEventListener('click', )
}
//Classes

class App {
    constructor() {
        this.title = "TITLE";
        this.board = "currentState"
        //this.tile = []
        this.player = "currentPlayer"
        this.resetBtn = "RESET";

    }

    setState() {
        this.state = currentState;
        this.player = currentPlayer;
        //this.g.
    }

    currentPlayer() {
        if(init || player2Click){
            player = PLAYER1;
        }else if (player1Click){
            player = PLAYER2;
        }
    }
    /*
    playerCounter(player1, player2) {
        this.counter1 = player1;
        this.counter2 = player2;
        this.currentPlayerArr = this.currentPlayer.tilesClicked(fn);
            tile
    }
    */
    
}


//VIEW
//includes render function, binding of the button click, state, pop up msg saying who won
class GameView {
    constructor() {
        this.title = this.createElement('h1')
            this.title.textContent = "TITLE";
        this.board = this.createElement('div')
            this.board.textContent = this.createTiles();
        this.resetBtn = this.createElement('button')
            this.resetBtn.textContent = "RESET";
        this.app.append(this.title, this.board, this.resetBtn)
    }

    createTiles(){

        const tile = document.createElement('div');
            if(tile) element.createElement('tile');
                
    document.body.appendChild(board)
    }
        


    bindButtonClick(fn) {
        this.button.addEventListener('click', fn);
    }

    bindTileClick(fn) {
        this.tile.addEventListener('click', fn);
    }


}

//currentState() {}



//CONTROLLER

class GameController {
    constructor(App, GameView) {
        this.a = App;
        this.g = GameView;
        this.g.bindButtonClick(this.clickHandler.bind(this));
        this.g.bindTileClick(this.addTileListener.bind(this));
        //this.g.

    }
    
    clickHandler() {
        currentClicks = clicks;
        for(let i=0; i>5; i++) {
            if(clicks >5) {
                checkForWin();
            }
        }
    }

    addTileListener() {
        tileArr.forEach(tile => {
            tile.addEventListener;
        });
    }

        //may switch this to add numbers to see if a win is met....1=X or 3=O (check this against the board itself)
        //if 3 and no null spaces then X wins || if 9 then O wins || else no one wins
    async checkForWin() {
           
        let winMsg = await clickHandler();//after handler has said it is activated we search the array WIN_CONS to see if match
            for(let i=0; i<WIN_CONS.length; i++) {
                
                if(this.playerCounter === WIN_CONS[[i]]){
                    return winMsg `${this.player} wins!`;
                } 
                return "No winner!"
            }
    }


    buttonClick() {

    }

    tileClick() {
        
    }

    
}

/*
let currentBoard = document.getElementById("container").createElement(div);

            for (var i = 0; i < TILES.length; i++) {
                newTile = document.createElement(tile);
                newTile.innerHTML = "";
                fragment.appendChild(tile);
            }
                    
                    const newBoard = document.createElement(div).createElement();
                        newBoard.appendChild(currentState);

                    const currentView = document.getElementById(board);
                    document.body.insertBefore(title, currentView);
                    const button = document.createElement(button, "RESET");
            
            document.body.onload = currentBoard; */