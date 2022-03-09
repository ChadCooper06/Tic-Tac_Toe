PURPOSE

Create a tic-tac-toe game that is playable and has a board that is 3x3.
When a square is clicked the square is changed to that player's shape

FUNCTIONAL

One buttonClick function that is listened for by the reset button and the squares but that does different things for each depending on which it is called on (the actual functional aspect is in the call and not the buttonClick function itself)


OOP 

Model-- all constants
  - the win conditions (array of arrays showing win possibilities)
      * each smaller array in the large array is going to be searched to see if the squares it lists are completed or not 

  - the title which shows in every state change

  - the button that shows in every state that restarts it all and clears the state to the original // VIEW
      * this is its own function that runs on INIT and on click of the resetBtn

  - whose turn it is based on who just clicked (player 1 starts)
      * if INIT or player 2 clicked then player 1 has their turn, otherwise it's player 2's turn

  - event listener --array (says what all squares are in the array of the event listener)?
      * not sure if this is going to be included but if so then this would be a list that the event listener will cycle through to know what squares have been clicked and then disable them by turning off their ability to be clicked or just popping them off the list of possible squares that can be clicked

  - Alert message info saying that it is a draw or that a certain player has won



View-- what is shown
  - the title is shown always

  - the reset button is shown always (eventListener is bound here that calls controller to reset state to original)
      * it's own listener or use the same one as the squares?

- the design of the individual squares? // VIEW
      * squares are an empty div that has nothing written in it 

  - the layout of the board and the original state where every square is empty? // VIEW
      * same as above
      * an array of squares

  - the game board that is 9 squares (3x3) and their states based on if they have been clicked or not and by whom (one eventListener bound here that controls every square) is shown always
      * an array of empty <divs> created by the JS that are square in shape with a solid border between them and that each have an event listener bound to them
      * their innerText is null until they are clicked and then it changes to either the X or O depending on who clicked
      * this will display the X or the O and the rest of the empty squares

  - render function in here to create everything (append the child or just create it all)
      * creates the <divs> inside the <MAIN div> that are the individual squares
        1. createElement and then appendChild- it should create the 9 <divs> then append each with the inline CSS and make their content null but also attach the eventListener to them each

  - use a grid for the board-from boostrap?
      * create the grid of squares using bootstrap placed inline with the JS to give them their shapes and borders

  - alert message pops up to say that a certain player has won or that it was a draw if win conditions are matched


Controller-- sets state at each event and handles the events
  - when reset is clicked the state is set to original
      * this is the same as INIT and is called upon first opening the page or when the resetBtn is clicked

  - when each square is clicked -eventListener- that square changes its innerText to the currentPlayer and the whole state of the board is updated to show
      * this then makes the current player switch to the other player

  - when a square (button) is clicked, the eventListener for that square is disabled so only squares that are "null" can be clicked- maybe that square is popped from the array of squares the eventListener has
        * or the eventListener is just disabled for the button after it is clicked

  - builds the board after each event(init, reset click, square click) and updates the currentState
      * the board is going to be always in the original state where everything shows except the innerText of the squares (null until clicked by either player1-x- or player2-o-)

  - checks the squares on the board every click after the 5th one to see if a win condition has occurred
      * any checking before this is unnecessary computing because there cannot be a win in less than 5 moves if each person takes a turn
      * will have to count the number of clicks and then activate this when needed and on every click after

        async checkForWin() {
            for(let i=0; i<WIN_CONS.length; i++) {
                
                if(counter1 === WIN_CONS[[]]){
                    return "`${currentPlayer}` wins!"
                } 
                return "No winner!"
            }
        }

      // Attack win conditions problem with pseudocode and then code like a morning warmup in sandbox

  - the win condition alert is going to use the comparison of the WIN_CON array to the board to see if any player has fulfilled the needed conditions (they clicked on all three squares in a specified array in the nested array) first.
      * if state stores the current clicked buttons for each player then you compare that list with the WIN_CON array to see if it matches any of them

