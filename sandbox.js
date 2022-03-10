const container = document.getElementById("gameBoard");
const squareArray = [];
const currentPlayer = "X";

//CONTROLLER

function gameOver(alert){
    
    document.getElementById("alert").innerHTML = alert;
    alert(this.state +" wins!");
    
    
/*if(winGame !== false){
    } else {
        alert("I see only losers")
    }*/
}

    //runs if the game is a draw
function drawGame(){
    let shouldReturn = true;
    squareArray.forEach(({state}) => {
        if(state == "") shouldReturn = false;
    });
    return shouldReturn;
}

function winGame(){
    const winCons = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 6], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for(let i=0; i<winCons.length; i++) {
        const [a, b, c] = winCons[i];

        if(
            squareArray[a].state !== "" &&
            squareArray[b].state === squareArray[b].state &&
            squareArray[c].state === squareArray[c].state
        ) {
            return true;
        }
    }
    return false;
}

//VIEW
class GameSquare{
    constructor(element, index){
        this.element = element;
        this.index = index;
        this.state = "";
    }
    clicked() {
        this.state = currentPlayer;
        
        this.element.classList.remove("notClicked");
        this.element.onclick = function() {
            return false;
        };
        this.element.querySelector("#p").innerHTML = this.state;
        
           if(winGame()) return gameOver(this.state + " wins!")
           if(drawGame()) return gameOver("No winner");
        this.currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    
    }
}

for(let index = 0; index < 9; index++) {
    const div = document.createElement("div");
    div.classList.add("square", "notClicked");
    const square = new GameSquare(div, index);
    square.onclick = () => {
        square.clicked();
    };
    div.appendChild(document.createElement("p"));
    container.appendChild(div);
    squareArray.push(square);    
}

   //function addEventListener('click', )

