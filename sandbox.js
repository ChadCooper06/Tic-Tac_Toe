const CONTAINER = document.getElementById("gameBoard");
const SQUAREARRAY = [];
const NEXTPLAYER = "";

function gameOver(){
    if(winGame !== false){
    alert(this.state +" wins!");
    } else {
        alert("I see only losers")
    }
    //document.getElementById("winner").innerHTML = message;
    //gameBoard.style.display = "none";
    //document.getElementById("gameOver").style.display = "block";
}

    //runs if the game is a draw
function drawGame(){
    let shouldReturn = true;
    SQUAREARRAY.forEach(({state}) => {
        if(state == "") shouldReturn = false;
    });
    return shouldReturn;
}

function winGame(){
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 6], [2, 5, 8], [0, 4, 8], [2, 4, 6],
    ];
    for(let i=0; i<lines.length; i++) {
        const [a, b, c] = lines[i];

        if(
            SQUAREARRAY[a].state !== "" &&
            SQUAREARRAY[b].state === SQUAREARRAY[b].state &&
            SQUAREARRAY[c].state === SQUAREARRAY[c].state
        ) {
            return true;
        }
    }
    return false;
}

//VIEW
class GameSquare{
    constructor(element, index){
        this.element=element;
        this.index=index;
        this.state="";
    }
    clicked() {
        this.state = NEXTPLAYER;
        this.element.classList.remove("notClicked");
        this.element.onclick = function() {
            return false;
        };
        this.element.querySelector("p").innerHTML = this.state;
            if(winGame()) {
                return gameOver;
            }
            if(drawGame()) {
                return gameOver;
            }
        NEXTPLAYER == "X" ? (NEXTPLAYER = "O") : (NEXTPLAYER = "X");
    }
}
function closeCell(){
    for(let index=0; index<9; index++) {
        const div = document.createElement("div");
        div.classList.add("cell", "notClicked");
        const cell = new GameSquare(div, index);
            div.onclick = function() {
                cell.clicked();
            };
        div.appendChild(document.createElement("p"));
        app.appendchild(div);
        SQUAREARRAY.push(cell);
    }
}
