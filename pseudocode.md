PURPOSE

Create a tic-tac-toe game that is playable and has a board that is 3x3.
When a square is clicked the square is changed to that player's shape

FUNCTIONAL

One buttonClick function that is listened for by the reset button and the squares but that does different things for each depending on which it is called on (the actual functional aspect is in the call and not the buttonClick function itself)


OOP 

Model-- all constants
  - the win conditions (array of arrays showing win possibilities)

  - the design of the individual squares?

  - the layout of the board and the original state where every square is empty?

  - the title which shows in every state change

  - the button that shows in every state that restarts it all and clears the state to the original

  - whose turn it is based on who just clicked (player 1 starts)

  - event listener array (says what all squares are in the array of the event listener)?


View-- what is shown
  - the title is shown always

  - the reset button is shown always (eventListener is bound here that calls controller to reset state to original)

  - the game board that is 9 squares (3x3) and their states based on if they have been clicked or not and by whom (one eventListener bound here that controls every square) is shown always

  - render function in here to create everything (append the child or just create it all)


Controller-- sets state at each event and handles the events
  - when reset is clicked the state is set to original

  - when each square is clicked -eventListener- that square changes its innerText to either X or O and the whole state of the board is updated to show

  - when a square (button) is clicked, the eventListener for that square is disabled so only squares that are "null" can be clicked- maybe that square is popped from the array of squares the eventListener has

  - builds the board after each event(init, reset click, square click) and updates the currentState

  - checks the squares on the board every click after the 5th one to see if a win condition has occurred

