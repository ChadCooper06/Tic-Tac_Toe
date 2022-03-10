

//MODEL
//const APP = document.getElementById("app")
const WIN_CONS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//const TITLE = document.getElementById("title").innerText = "Tic-Tac-Toe";
//const RESET = document.getElementById("resetBtn").innerText = "Reset Game";
//const NEXTPLAYER = "X"
//const BOXARRAY = [];





//Classes

class App {
    constructor() {

    }

changeBoard(i){
    this.board[i] = this.currentPlayer;
}
changePlayer(){
    if(this.currentPlayer == "X"){
        this.currentPlayer = "O";
    } else{
        this.currentPlayer = "X";
    }
}
}
    

//VIEW

class GameView {
    constructor() {
        this.app = this.getElement("#app")
        this.title = this.createElement("h1")
        this.title.textContent = "Tic-Tac-Toe"

        this.board = this.createElement("board")
        this.board.style.height = "300px"
        this.board.style.width = "300px"
        this.cell = this.createElement("button")
        this.cell.textContent = ""

        this.resetBtn = this.createElement("reset")
        this.resetBtn.textContent = "Reset Game"

        this.row = this.createElement("div", "row")
        this.col = this.createElement("div", "col")
        this.app.append(this.title)
        this.app.append(this.board)
        for(let i=0; i< 9; i++){
            let cell = document.createElement("button")
            cell.classList = "cell"
            cell.id = "cell" + i
            this.board.append(cell)
        }
        this.app.append(this.row)
        this.row.append(this.col)
        this.col.append(this.resetBtn)
    }

    createElement(tag, className){
        const element = document.createElement(tag)
        if(className) element.classList.add(className)
        return element
    }
    getElement(selector){
        const element = document.querySelector(selector)
        return element
    }
}



//CONTROLLER

class GameController {
    constructor(App, GameView) {
        this.app = App;
        this.v = GameView;
        //this.v.bindButtonClick(this.clickHandler.bind(this));
        //this.v.bindTileClick(this.addTileListener.bind(this));
        
    }
    
    clickHandler() {
        currentClicks = clicks;
        for(let i=0; i>5; i++) {
            if(clicks >5) {
                checkForWin();
            }
        }
    }

    checkForWin() {
           
            for(let i=0; i<WIN_CONS.length; i++) {
                
                let [a, b, c] = WIN_CONS[i];

                if(
                    BOXARRAY[a].state !== "" &&
                    BOXARRAY[b].state === BOXARRAY[b].state &&
                    BOXARRAY[c].state === BOXARRAY[c].state) {
                        return true;
                }
            }
            return false;
    }
    
}

