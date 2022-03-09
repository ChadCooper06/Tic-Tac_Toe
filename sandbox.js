//MODEL

const WIN_CONS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const TITLE = "Tic-Tac-Toe";
const RESET = "Reset Game";
const PLAYER1 = "X";
const PLAYER2 = "O";
const BOARD = []


function init() {
    currentPlayer = PLAYER1;
    currentState = gameBoard
    resetBtn.addEventListener('click', fn)
}
//Classes

class App {
    constructor() {
        this.title;
        this.board;
        this.player;
        this.resetBtn;

    }

    setState() {
        if(player1Click) {

        }
        
    }

    currentPlayer() {
        if(init || player2Click){
            player = PLAYER1;
        }else if (player1Click){
            player = PLAYER2;
        }
    }
    
  /*  
    playerCount(player1, player2){
        let counter1 = [];
        let counter2 = [];
        for(let i=0; i< TILES.length; i++) {
            if(player1Click) {
                
            }
        }
    
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
            this.title.innerHTML = "TITLE";
        this.board = getElementById('grid')
            this.cell = this.createElement('col');
                this.board.appendChild(this.cell)
            
        this.resetBtn = this.createElement('button')
            this.resetBtn.innerHTML = "RESET";
        this.app.append(this.title, this.board, this.resetBtn)
        
    }
    
    bindButtonClick(fn) {
        this.button.addEventListener('click', fn);
    }

    bindTileClick(fn) {
        this.tile.addEventListener('click', fn);
    }

    changeTile() {
        let 
        for(let i=0; i<BOARD.length; i++){
            if(BOARD[i] === 'clicked'){
                if(player1Click){
                    BOARD[i].innerText = PLAYER1;
                }else if (player2Click) {
                    BOARD[i].innerText = PLAYER2

                }
            }
        }
    }


}



//CONTROLLER

class GameController {
    constructor(App, GameView) {
        this.a = App;
        this.v = GameView;
        this.v.bindButtonClick(this.clickHandler.bind(this));
        this.v.bindTileClick(this.addTileListener.bind(this));
        this.v.

    }
    
    clickHandler() {
        currentClicks = clicks;
        for(let i=0; i>5; i++) {
            if(clicks >5) {
                checkForWin();
            }
        }
    }

    setGameBoard() {
        //return array with length 9 and uses current state of board, switches player and updates the 
    }

    /*addTileListener() {
        tileArr.forEach(tile => {
            tile.addEventListener;
        });
    }
    */
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


    
}
const app = new(GameController(new App(), new GameView))
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